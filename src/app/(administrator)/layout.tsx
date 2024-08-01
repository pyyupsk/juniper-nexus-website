import { Breadcrumb } from '@/components/breadcrumb';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Fragment, ReactNode } from 'react';
import { Header } from './components/header';

export default function Layout({ children }: { children: ReactNode }) {
    const { sessionClaims } = auth();

    if (!sessionClaims?.metadata?.role || sessionClaims.metadata.role !== 'admin') {
        return redirect('/');
    }

    return (
        <Fragment>
            <Header />
            <div className="pt-[70px] pb-10 container">
                <Breadcrumb className="mb-4" />
                <main className="flex flex-col flex-1 gap-4 md:gap-8">{children}</main>
            </div>
        </Fragment>
    );
}
