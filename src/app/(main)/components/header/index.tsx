'use client';

import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Desktop } from './desktop';
import { Mobile } from './mobile';

export type Props = {
    user: boolean;
    pathname: string;
    scrolled: boolean;
    open?: boolean;
    setOpen?: Dispatch<SetStateAction<boolean>>;
};

export function Header() {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const { user: loggedIn } = useUser();
    const pathname = usePathname();

    const user = !!loggedIn;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerFocus = 'border-b bg-background/90 py-0 shadow-sm backdrop-blur-sm';

    const headerClass = cn(
        'fixed top-0 z-40 w-full transition-all',
        open ? headerFocus : 'py-4',
        pathname !== '/' ? headerFocus : scrolled && headerFocus,
    );

    return (
        <header className={headerClass}>
            <div className="container flex justify-between items-center h-16 relative">
                <Desktop user={user} pathname={pathname} scrolled={scrolled} />
                <Mobile user={user} pathname={pathname} scrolled={scrolled} open={open} setOpen={setOpen} />
            </div>
        </header>
    );
}
