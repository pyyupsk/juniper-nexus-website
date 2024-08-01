import { contacts } from '@/data/contacts';
import { legals } from '@/data/legals';
import { links as quickLinks, Url } from '@/data/links';
import Link from 'next/link';

type Links = {
    title: string;
    links: Url[];
};

const links: Links[] = [
    {
        title: 'ลิงค์ด่วน',
        links: quickLinks,
    },
    {
        title: 'เชื่อมต่อ',
        links: contacts.map((contact) => ({
            name: contact.name,
            href: contact.link.href,
        })),
    },
];

export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="container py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-primary">Juniper Nexus</h3>
                        <p className="muted">ชุมชนที่มีชีวิตชีวาสำหรับผู้เล่น Garena RoV (Realm of Valor)</p>
                    </div>
                    {links.map((section, index) => (
                        <div key={index}>
                            <h4>{section.title}</h4>
                            <ul className="space-y-2 list-none m-0">
                                {section.links.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="muted hover:text-primary transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-background py-4">
                <div className="container flex flex-col lg:flex-row items-center justify-between">
                    <small className="text-sm">&copy; {new Date().getFullYear()} Juniper Nexus. สงวนลิขสิทธิ</small>
                    <ul className="flex space-x-4 list-none">
                        {legals.map((legal, index) => (
                            <li key={index}>
                                <Link
                                    href={legal.href}
                                    className="text-sm muted hover:text-primary transition-colors underline underline-offset-4"
                                >
                                    {legal.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
