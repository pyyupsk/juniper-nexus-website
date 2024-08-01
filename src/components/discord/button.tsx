import { discord } from '@/data/contacts';
import Link from 'next/link';
import { ReactNode } from 'react';
import { buttonVariants } from '../ui/button';

type Props = {
    size?: 'default' | 'sm' | 'lg' | 'xl';
    variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
    rounded?: boolean;
    className?: string;
    icon?: boolean;
    children?: ReactNode;
};

export function DiscordButton({
    size = 'default',
    variant = 'default',
    rounded = false,
    className,
    icon,
    children,
}: Props) {
    return (
        <Link
            href={discord.link.href}
            target="_blank"
            className={buttonVariants({ size, variant, rounded, className })}
        >
            {icon && <discord.icon className="size-6 mr-2" />}
            {children}
        </Link>
    );
}
