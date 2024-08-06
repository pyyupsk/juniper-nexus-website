import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { discordUser } from '@/lib/clerk/server';
import { SignOutButton } from '@clerk/nextjs';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const links = [
    { name: 'หน้าหลัก', href: '/admin/dashboard' },
    { name: 'สมาชิกทั้งหมด', href: '/admin/users' },
    { name: 'ความสำเร็จของสมาชิก', href: '/admin/achievements' },
    { name: 'จัดการกิจกรรม', href: '/admin/events' },
    { name: 'จัดการเหรียญ', href: '/admin/coins' },
];

export async function Header() {
    const user = await discordUser();

    if (!user) return null;

    return (
        <header className="bg-background/80 border-b shadow-sm backdrop-blur fixed top-0 z-50 w-full">
            <div className="flex items-center h-16 px-4 justify-between">
                <Link href="/admin" className="flex items-center gap-2" prefetch={false}>
                    <Logo width={32} height={32} />
                    <span className="font-medium">Admin Dashboard</span>
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-2">
                            <Image
                                src={user.imageUrl}
                                width={28}
                                height={28}
                                className="rounded-full"
                                alt={user.username || 'Avatar'}
                            />
                            <span>{user.username}</span>
                            <ChevronDown className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52">
                        <DropdownMenuLabel>ลิ้งค์ด่วน</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {links.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <DropdownMenuItem>{link.name}</DropdownMenuItem>
                            </Link>
                        ))}
                        <DropdownMenuSeparator />
                        <SignOutButton>
                            <DropdownMenuItem>ออกจากระบบ</DropdownMenuItem>
                        </SignOutButton>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
