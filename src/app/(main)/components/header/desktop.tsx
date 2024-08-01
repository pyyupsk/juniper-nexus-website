import { Logo } from '@/components/logo';
import { buttonVariants } from '@/components/ui/button';
import { links } from '@/data/links';
import Link from 'next/link';
import { Fragment } from 'react';
import { Props } from './index';
import { RenderLink } from './render-link';

export function Desktop({ user, pathname, scrolled }: Props) {
    return (
        <Fragment>
            <Link href="/" className="text-2xl flex justify-start items-center gap-2 min-w-[200px]">
                <Logo />
                <span className="text-base lg:text-lg">Juniper Nexus</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
                {links.map((link) => (
                    <RenderLink key={link.href} link={link} pathname={pathname} scrolled={scrolled} />
                ))}
            </nav>
            <div className="min-w-[200px] justify-end hidden lg:flex">
                <Link href={user ? '/members-area' : '/sign-in'} className={buttonVariants()}>
                    {user ? 'พื้นที่สมาชิก' : 'เข้าสู่ระบบ'}
                </Link>
            </div>
        </Fragment>
    );
}
