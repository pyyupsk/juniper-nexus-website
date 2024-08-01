import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen max-w-3xl mx-auto">
            <h2>หน้าเพจสำหรับสมาชิกกำลังอยู่ในระหว่างพัฒนา</h2>
            <p className="leading">
                เรากำลังทำงานอย่างหนักเพื่อสร้างหน้าเพจสำหรับสมาชิกให้ดียิ่งขึ้น ติดตามความคืบหน้าและคุณสมบัติใหม่ๆ
                ที่จะมาเสริมสร้างประสบการณ์การเล่นเกมและการมีส่วนร่วมในชุมชนของคุณ
            </p>
            <p className="leading">โปรดอดใจรอ และขอบคุณสำหรับความอดทนของคุณ!</p>
            <Link href="/" className={buttonVariants({ size: 'lg', className: 'mt-4' })}>
                กลับสู่หน้าหลัก
            </Link>
        </div>
    );
}
