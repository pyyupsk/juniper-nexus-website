import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import Aside from './components/aside';
import { Header } from './components/header';

export default function Layout({ children }: { children: ReactNode }) {
    const { sessionClaims } = auth();

    if (!sessionClaims?.metadata?.role || sessionClaims.metadata.role !== 'admin') {
        return redirect('/');
    }

    return (
        <div className="flex">
            <Header />
            <Aside />
            <main className="flex-grow pb-10 pt-24 container">
                <div className="flex flex-col flex-1 gap-4 md:gap-8">{children}</div>
            </main>
        </div>
    );
}
