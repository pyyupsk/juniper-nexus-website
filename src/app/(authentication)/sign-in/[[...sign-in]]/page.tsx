import { commonMetaData } from '@/lib/meta';
import { SignIn } from '@clerk/nextjs';

export async function generateMetadata() {
    const title = 'ลงชื่อเข้าใช้เพื่อเข้าถึงแดชบอร์ด';
    const description =
        'เข้าสู่ระบบ Juniper Nexus เพื่อเข้าถึงแดชบอร์ดของคุณ ดูภาพรวมธุรกรรม, ตารางอันดับ, และข้อมูล Coin ของคุณได้อย่างง่ายดาย';

    return commonMetaData({ title, description });
}

export default function Page() {
    return <SignIn />;
}
