import { Url } from '@/data/links';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
    link: Url;
    pathname: string;
    scrolled: boolean;
};

export function RenderLink({ link, pathname, scrolled }: Props) {
    return (
        <Link
            key={link.href}
            href={link.href}
            className={cn(
                'hover:text-primary transition-colors',
                pathname !== '/' && 'text-muted-foreground',
                scrolled && 'text-muted-foreground',
            )}
        >
            {link.name}
        </Link>
    );
}
