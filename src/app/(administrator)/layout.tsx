import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Fragment, ReactNode } from 'react';
import { Header } from './components/header';

export default function Layout({ children }: { children: ReactNode }) {
    const { sessionClaims } = auth();

    if (!sessionClaims?.metadata?.role || sessionClaims.metadata.role !== 'admin') {
        redirect('/');
    }

    return (
        <Fragment>
            <Header />
            <main className="pt-28 container pb-10 flex flex-col flex-1 gap-4 md:gap-8">{children}</main>
        </Fragment>
    );
}
