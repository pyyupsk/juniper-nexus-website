import { commonMetaData } from '@/lib/meta';
import { MembersAchievements } from '../components/members-achievements';

export async function generateMetadata() {
    const title = 'ความสำเร็จของสมาชิก';
    const description =
        'ชมความสำเร็จของสมาชิก Juniper Nexus! เราภูมิใจในความมุ่งมั่นและความสามารถของสมาชิกทุกคนในกิลด์ เข้าร่วมกับเราเพื่อเป็นส่วนหนึ่งของชุมชนที่แข็งแกร่งและเฉลิมฉลองความสำเร็จไปพร้อมกัน';

    return commonMetaData({ title, description });
}

export default function Page() {
    return (
        <main className="mt-16">
            <MembersAchievements />
        </main>
    );
}
