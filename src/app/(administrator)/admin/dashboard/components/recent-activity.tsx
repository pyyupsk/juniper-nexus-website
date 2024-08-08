import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { prisma } from '@/lib/prisms';
import dayjs from 'dayjs';
import Link from 'next/link';
import 'dayjs/locale/th';
import { env } from '@/env';

type Log = {
    action: string;
    timestamp: Date;
};

const production = env.NODE_ENV === 'production';

export async function RecentActivity({ limit }: { limit?: number | undefined }) {
    const oneMonthAgo = dayjs().subtract(3, 'month').toDate();

    const [achievements, events, coins] = production
        ? await Promise.all([
              prisma.achievements.findMany({
                  take: 5,
                  orderBy: { created_at: 'desc' },
                  where: { created_at: { gte: oneMonthAgo } },
              }),
              prisma.events.findMany({
                  take: 5,
                  orderBy: { created_at: 'desc' },
                  where: { created_at: { gte: oneMonthAgo } },
              }),
              prisma.coins.findMany({
                  take: 5,
                  orderBy: { created_at: 'desc' },
                  where: { created_at: { gte: oneMonthAgo } },
              }),
          ])
        : [[], [], []];

    const logs: Log[] = [
        ...achievements.map((achievement) => ({
            action: `ความสำเร็จใหม่ ${achievement.name} ของ ${achievement.user_id} ได้ถูกสร้างขึ้น`,
            timestamp: achievement.created_at ?? new Date(),
        })),
        ...events.map((event) => ({
            action: `${event.name} ได้ถูกสร้างขึ้น`,
            timestamp: event.created_at,
        })),
        ...coins.map((coin) => ({
            action: `ผู้ใช้ ${coin.user_id} ${coin.amount > 0 ? 'ได้รับ' : 'ถูกหัก'} ${coin.amount} เหรียญ`,
            timestamp: coin.created_at,
        })),
    ];

    const data = logs.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, limit);

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">กิจกรรมที่ผ่านมาใน 3 เดือน</CardTitle>
                {limit && (
                    <Link href="/admin/dashboard/logs" className="text-sm font-medium text-primary" prefetch={false}>
                        ดูทั้งหมด
                    </Link>
                )}
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
                                <TableCell className="muted">
                                    {dayjs(log.timestamp).locale('th').format('DD MMMM YYYY')}
                                </TableCell>
                            </TableRow>
                        ))}
                        {data.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <div className="min-h-[200px] flex items-center justify-center">
                                        <p className="muted">ไม่พบข้อมูลกิจกรรมล่าสุดภายใน 3 เดือน</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
