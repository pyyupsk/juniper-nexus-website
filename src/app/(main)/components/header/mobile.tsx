import { Button, buttonVariants } from '@/components/ui/button';
import { links } from '@/data/links';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Fragment, useCallback, useState } from 'react';
import { Props } from './index';
import { RenderLink } from './render-link';

export function Mobile({ user, pathname, scrolled }: Props) {
    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => setOpen((prev) => !prev), []);

    return (
        <Fragment>
            <Button size="icon" variant="ghost" className="lg:hidden" onClick={toggleOpen}>
                {open ? <X /> : <Menu />}
                <span className="sr-only">Toggle menu</span>
            </Button>
            <div
                className={cn(
                    'absolute top-16 left-0 right-0 transition-all container flex flex-col gap-4 py-6 border-b bg-background/90 shadow-sm',
                    open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                )}
            >
                {links.map((link) => (
                    <RenderLink key={link.href} link={link} pathname={pathname} scrolled={scrolled} />
                ))}
                <Link href={user ? '/members-area' : '/sign-in'} className={buttonVariants()}>
                    {user ? 'พื้นที่สมาชิก' : 'เข้าสู่ระบบ'}
                </Link>
            </div>
        </Fragment>
    );
}
