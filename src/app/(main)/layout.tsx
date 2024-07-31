import { Fragment, ReactNode } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}
