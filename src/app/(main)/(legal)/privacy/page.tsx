import { privacy, Privacy } from '@/data/privacy';
import { commonMetaData } from '@/lib/meta';

export async function generateMetadata() {
    const title = 'นโยบายความเป็นส่วนตัว';
    const description =
        'อ่านนโยบายความเป็นส่วนตัวของ Juniper Nexus เพื่อเรียนรู้เกี่ยวกับวิธีการเก็บรวบรวม ใช้ และปกป้องข้อมูลของคุณ เรามุ่งมั่นที่จะรักษาความปลอดภัยและความเป็นส่วนตัวของข้อมูลสมาชิกทุกคนในชุมชน Garena RoV ของเรา';

    return commonMetaData({ title, description });
}

export default function Page() {
    return (
        <main className="mt-16 container py-20 flex flex-col gap-10 items-start">
            <h2>นโยบายความเป็นส่วนตัว</h2>
            {privacy.map((section: Privacy, index: number) => (
                <section key={index}>
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                    {section.list && (
                        <ul>
                            {section.list.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </section>
            ))}
        </main>
    );
}
