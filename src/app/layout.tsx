import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { commonMetaData } from '@/lib/meta';
import { ClerkProvider } from '@clerk/nextjs';
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
            'เข้าร่วม Juniper Nexus เพื่อสัมผัสประสบการณ์การเล่นเกม Garena RoV อย่างที่ไม่เคยมีมาก่อน! เป็นส่วนหนึ่งของกิลด์ชั้นนำในประเทศไทย สร้างมิตรภาพและพัฒนาทักษะการเล่นเกมในสภาพแวดล้อมที่เป็นมิตรและน่าดึงดูด',
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
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
