'use client';

import { useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Desktop } from './desktop';
import { Mobile } from './mobile';

export type Props = {
    user: boolean;
    pathname: string;
    scrolled: boolean;
};

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { user: loggedIn } = useUser();
    const pathname = usePathname();

    const user = !!loggedIn;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClass = `fixed top-0 z-40 w-full transition-all ${
        pathname !== '/' || scrolled ? 'border-b bg-background/90 py-0 shadow-sm backdrop-blur-sm' : 'py-4'
    }`;

    return (
        <header className={headerClass}>
            <div className="container flex justify-between items-center h-16 relative">
                <Desktop user={user} pathname={pathname} scrolled={scrolled} />
                <Mobile user={user} pathname={pathname} scrolled={scrolled} />
            </div>
        </header>
    );
}
