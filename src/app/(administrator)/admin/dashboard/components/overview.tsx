import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { env } from '@/env';
import { prisma } from '@/lib/prisms';
import { Calendar, Coins, Trophy, UserRound } from 'lucide-react';

const production = env.NODE_ENV === 'production';

export async function Overview() {
    const users = production ? await prisma.user.count() : Math.floor(Math.random() * 1000);
    const achievements = production ? await prisma.achievements.count() : Math.floor(Math.random() * 1000);
    const events = production ? await prisma.event.count() : Math.floor(Math.random() * 1000);
    const coins = production
        ? await prisma.coin.findMany()
        : [...Array(4)].map(() => ({ amount: Math.floor(Math.random() * 1000) }));

    const card = [
        {
            title: 'ผู้ใช้ทั้งหมด',
            span: 'ผู้ใช้',
            value: users,
            icon: UserRound,
        },
        {
            title: 'ผลงานทั้งหมด',
            span: 'ผลงาน',
            value: achievements,
            icon: Trophy,
        },
        {
            title: 'กิจกรรมทั้งหมด',
            span: 'กิจกรรม',
            value: events,
            icon: Calendar,
        },
        {
            title: 'เหรียญทั้งหมด',
            span: 'เหรียญ',
            value: coins.reduce((acc, coin) => acc + coin.amount, 0),
            icon: Coins,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {card.map((item) => (
                <Card key={item.title}>
                    <CardHeader className=" pb-2">
                        <CardTitle className="text-sm font-medium flex items-center">
                            <item.icon className="size-4 muted mr-2" /> {item.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {item.value}
                            <span className="text-sm muted ml-2">{item.span}</span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
