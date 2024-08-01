import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { prisma } from '@/lib/prisms';
import dayjs from 'dayjs';
import Link from 'next/link';
import 'dayjs/locale/th';

type Log = {
    action: string;
    timestamp: Date;
};

export async function RecentActivity() {
    const oneMonthAgo = dayjs().subtract(1, 'month').toDate();

    const [achievements, events, coins] = await Promise.all([
        prisma.achievements.findMany({
            take: 5,
            orderBy: { created_at: 'desc' },
            where: { created_at: { gte: oneMonthAgo } },
        }),
        prisma.event.findMany({
            take: 5,
            orderBy: { timestamp: 'desc' },
            where: { timestamp: { gte: oneMonthAgo } },
        }),
        prisma.coin.findMany({
            take: 5,
            orderBy: { timestamp: 'desc' },
            where: { timestamp: { gte: oneMonthAgo } },
        }),
    ]);

    const logs: Log[] = [
        ...achievements.map((achievement) => ({
            action: `ความสำเร็จใหม่ ${achievement.title} ของ ${achievement.member} ได้ถูกสร้างขึ้น`,
            timestamp: achievement.created_at ?? new Date(),
        })),
        ...events.map((event) => ({
            action: `${event.event_name} ได้ถูกสร้างขึ้น`,
            timestamp: event.timestamp,
        })),
        ...coins.map((coin) => ({
            action: `ผู้ใช้ ${coin.user_id} ${coin.amount > 0 ? 'ได้รับ' : 'ถูกหัก'} ${coin.amount} เหรียญ`,
            timestamp: coin.timestamp,
        })),
    ];

    const data = logs.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, 5);

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">กิจกรรมที่ผ่านมาใน 1 เดือน</CardTitle>
                <Link href="/admin/logs" className="text-sm font-medium text-primary" prefetch={false}>
                    ดูทั้งหมด
                </Link>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>การกระทำ</TableHead>
                            <TableHead>เวลา</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((log) => (
                            <TableRow key={log.timestamp.getTime()}>
                                <TableCell>{log.action}</TableCell>
                                <TableCell className="text-muted-foreground">
                                    {dayjs(log.timestamp).locale('th').format('DD MMMM YYYY')}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}