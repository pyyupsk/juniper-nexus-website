import { Term, terms } from '@/data/terms';
import { commonMetaData } from '@/lib/meta';

export async function generateMetadata() {
    const title = 'ข้อกำหนดในการให้บริการ';
    const description =
        'อ่านข้อกำหนดในการให้บริการของ Juniper Nexus เพื่อทราบกฎกติกาและเงื่อนไขในการเข้าร่วมชุมชนและการใช้ทรัพยากรต่างๆ ของเราในชุมชน Garena RoV';

    return commonMetaData({ title, description });
}

export default function Page() {
    return (
        <main className="mt-16 container py-20 flex flex-col gap-10 items-start">
            <h2>ข้อกำหนดในการให้บริการ</h2>
            {terms.map((section: Term, index: number) => (
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
