import { commonMetaData } from '@/lib/meta';
import { MembersAchievements } from '../components/members-achievements';

export async function generateMetadata() {
    const title = 'ความสำเร็จของสมาชิก';
    const description =
        'ดูคะแนนและความสำเร็จของสมาชิกใน Juniper Nexus ในเกม Garena RoV (Realm of Valor) รวมถึงอันดับที่พวกเขาได้รับ';

    return commonMetaData({ title, description });
}

export default function Page() {
    return (
        <main className="mt-16">
            <MembersAchievements />
        </main>
    );
}
