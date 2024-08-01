import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/data/faqs';
import { commonMetaData } from '@/lib/meta';
import { ContactForm } from '../components/sections/contact-form';
import { ContactsCard } from '../components/sections/contacts-card';

export async function generateMetadata() {
    const title = 'ติดต่อเรา';
    const description =
        'มีคำถามหรือข้อสงสัย? ติดต่อ Juniper Nexus ผ่านอีเมล, Discord, หรือ Facebook เราพร้อมให้ความช่วยเหลือและตอบข้อสงสัยของคุณเกี่ยวกับการเข้าร่วมกิลด์และกิจกรรมต่าง ๆ ของเรา';

    return commonMetaData({ title, description });
}

export default function Page() {
    return (
        <main>
            <section className="py-16 container min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-primary border-b-4 border-primary">รับการติดต่อ</h2>
                <p>หากต้องการความช่วยเหลือหรือสอบถามข้อมูลใดๆ โปรดติดต่อเราผ่านช่องทางต่อไปนี้</p>
                <ContactsCard />
            </section>
            <section className="py-16 container">
                <h2 className="text-primary">คำถามที่พบบ่อย</h2>
                <p>ตรวจสอบส่วนคำถามที่พบบ่อยของเราเพื่อดูคำตอบอย่างรวดเร็วสำหรับคำถามทั่วไปเกี่ยวกับ Juniper Nexus</p>
                <Accordion
                    type="multiple"
                    defaultValue={faqs.map((_, index) => `item-${index}`)}
                    className="w-full mt-8"
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem key={faq.question} value={`item-${index + 1}`}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
            <ContactForm />
        </main>
    );
}
