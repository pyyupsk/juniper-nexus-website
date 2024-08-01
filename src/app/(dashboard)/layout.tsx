import { Fragment, ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return <Fragment>{children}</Fragment>;
}

export const revalidate = 3600; // revalidate at most every hour
