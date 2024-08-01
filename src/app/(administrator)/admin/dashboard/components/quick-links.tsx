import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Coins, UserRound } from 'lucide-react';
import Link from 'next/link';

const links = [
    {
        icon: UserRound,
        title: 'การดูแลระบบผู้ใช้',
        desc: 'จัดการบัญชีผู้ใช้ บทบาท และการอนุญาต.',
        button: { label: 'ไปที่เพจของผู้ดูแลระบบผู้ใช้', href: '/admin/users' },
    },
    {
        icon: Calendar,
        title: 'การวางแผนงาน',
        desc: 'วางแผนและจัดการกิจกรรมและกิจกรรมที่กำลังจะเกิดขึ้น',
        button: { label: 'ไปที่การวางแผนกิจกรรม', href: '/admin/events' },
    },
    {
        icon: Coins,
        title: 'การกระจายเหรียญ',
        desc: 'จัดการการแจกจ่ายเหรียญเสมือนให้กับผู้ใช้',
        button: { label: 'ไปที่การแจกเหรียญ', href: '/admin/coins' },
    },
];

export function QuickLinks() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
                <Card key={link.title}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">{link.title}</CardTitle>
                        <link.icon className="size-6 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{link.desc}</p>
                    </CardContent>
                    <CardFooter>
                        <Link href={link.button.href} prefetch={false}>
                            <Button variant="outline" size="sm">
                                {link.button.label}
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
