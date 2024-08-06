'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { normalize } from '@/utils/normalize';
import {
    CalendarIcon,
    HomeIcon,
    LoaderCircleIcon,
    MonitorCog,
    MoonIcon,
    SunIcon,
    Trophy,
    UsersIcon,
    WalletIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'หน้าหลัก', href: '/admin/dashboard', icon: HomeIcon },
    { name: 'สมาชิกทั้งหมด', href: '/admin/users', icon: UsersIcon },
    { name: 'ความสำเร็จของสมาชิก', href: '/admin/achievements', icon: Trophy },
    { name: 'จัดการกิจกรรม', href: '/admin/events', icon: CalendarIcon },
    { name: 'จัดการเหรียญ', href: '/admin/coins', icon: WalletIcon },
];

const themes = [
    { name: 'Light', value: 'light', icon: SunIcon },
    { name: 'Dark', value: 'dark', icon: MoonIcon },
    { name: 'System', value: 'system', icon: MonitorCog },
];

export default function Aside() {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    const active = (href: string) =>
        pathname.startsWith(href)
            ? 'bg-primary/15 text-primary hover:bg-primary/20'
            : 'hover:bg-primary/10 hover:text-primary';

    const ThemeIcon = themes.find((t) => t.value === theme)?.icon || LoaderCircleIcon;

    return (
        <aside className="sticky top-0 h-screen w-60 bg-background text-foreground border-r flex flex-col justify-between">
            <nav className="muted py-6 mt-16">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={cn('flex items-center gap-2 py-3 px-6 transition-all', active(link.href))}
                        prefetch={false}
                    >
                        <link.icon className="size-5" />
                        <span>{link.name}</span>
                    </Link>
                ))}
            </nav>
            <div className="p-6">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full flex items-center gap-2">
                            <ThemeIcon className={cn('size-5', !theme && 'animate-spin')} />
                            <span>{normalize(theme || 'Loading')}</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-52">
                        <DropdownMenuLabel>Change Theme</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                            <DropdownMenuRadioItem value="light">Light Theme</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="dark">Dark Theme</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="system">System Theme</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </aside>
    );
}
