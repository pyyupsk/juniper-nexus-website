import { BASE_URL } from '@/constants';
import { ClerkProvider as _ClerkProvider } from '@clerk/nextjs';
import { ReactNode } from 'react';
import { buttonVariants } from './ui/button';

export function ClerkProvider({ children }: { children: ReactNode }) {
    return (
        <_ClerkProvider
            appearance={{
                layout: {
                    logoImageUrl: `${BASE_URL}/logo.webp`,
                    privacyPageUrl: `${BASE_URL}/privacy`,
                    socialButtonsVariant: 'blockButton',
                    termsPageUrl: `${BASE_URL}/terms`,
                },
                elements: {
                    cardBox: 'w-full',
                    card: 'bg-card p-10 shadow-sm border border-border',
                    logoBox: 'w-full h-20',
                    logoImage: 'w-20 h-20',
                    headerTitle: 'scroll-m-20 font-semibold tracking-tight text-2xl text-primary',
                    headerSubtitle: 'text-muted-foreground leading-7 text-base',
                    socialButtonsBlockButton: buttonVariants(),
                    socialButtonsBlockButtonText: 'font-semibold text-base',
                    footer: 'bg-gradient-to-b from-card to-card',
                    footerAction: 'hidden',
                },
            }}
        >
            {children}
        </_ClerkProvider>
    );
}
