import '@/styles/globals.css';
import { ClerkProvider } from '@/components/clerk-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { commonMetaData } from '@/lib/meta';
import type { Metadata } from 'next';
import { Prompt as FontSans } from 'next/font/google';
import { ReactNode } from 'react';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export async function generateMetadata(): Promise<Metadata> {
    const metaData: Metadata = commonMetaData({
        title: {
            template: `%s | Juniper Nexus`,
            default: 'Juniper Nexus | ชุมชนมีชีวิตชีวาสำหรับผู้เล่น Garena RoV',
        },
        description:
            'ยินดีต้อนรับสู่ Juniper Nexus! เข้าร่วมชุมชนที่มีชีวิตชีวาของเราเพื่อปรับปรุงประสบการณ์การเล่น Garena RoV ของคุณ พบกับกิจกรรมสนุกๆ การประชุมกลยุทธ์ และรับสิทธิพิเศษมากมายจากการมีส่วนร่วมในกิลด์ของเรา',
    });

    return metaData;
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <ClerkProvider>
            <html lang="th" className="dark" suppressHydrationWarning>
                <body className={fontSans.variable}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        {children}
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
