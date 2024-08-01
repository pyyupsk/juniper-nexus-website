import Link from 'next/link';
import { Fragment, ReactNode } from 'react';

type FAQ = {
    question: string;
    answer: string | ReactNode;
};

export const faqs: FAQ[] = [
    {
        question: 'ฉันจะเข้าร่วม Juniper Nexus ได้อย่างไร',
        answer: 'หากต้องการเข้าร่วมกิลด์ของเรา เพียงเข้าร่วมเซิร์ฟเวอร์ Discord ของเราโดยใช้ลิงก์คำเชิญ ผู้ดูแลของเราจะแนะนำคุณตลอดกระบวนการ',
    },
    {
        question: 'Juniper Nexus รองรับเกมใดบ้าง',
        answer: 'Juniper Nexus มุ่งเน้นไปที่ Garena RoV (Realm of Valor) เป็นหลัก เราจัดกิจกรรมและกิจกรรมสำหรับผู้เล่น RoV โดยเฉพาะ',
    },
    {
        question: 'ใครสามารถเข้าร่วม Juniper Nexus ได้บ้าง',
        answer: 'เรายินดีต้อนรับผู้เล่นทุกคนที่หลงใหลใน Garena RoV และกำลังมองหาที่จะเข้าร่วมชุมชนเกมที่ให้การสนับสนุนและกระตือรือร้น',
    },
    {
        question: 'ฉันจะสนับสนุน Juniper Nexus ได้อย่างไร',
        answer: 'คุณสามารถมีส่วนร่วมได้โดยการเข้าร่วมกิจกรรมกิลด์ แบ่งปันความเชี่ยวชาญด้านการเล่นเกมของคุณ หรือแม้แต่ช่วยเราพัฒนาเครื่องมือและโปรเจ็กต์บน GitHub',
    },
    {
        question: 'ฉันจะรับการสนับสนุนสำหรับเครื่องมือ Juniper Nexus ได้จากที่ใด',
        answer: (
            <Fragment>
                <span>
                    สำหรับการสนับสนุนใดๆ ที่เกี่ยวข้องกับบอท Discord แดชบอร์ด หรือเครื่องมืออื่นๆ ของเรา
                    คุณสามารถติดต่อเราได้ที่ Discord หรือทางอีเมลของนักพัฒนาได้ที่
                </span>
                <Link href="pyyupsk@proton.me" target="_blank" rel="noopener noreferrer" className="link ml-1">
                    pyyupsk@proton.me
                </Link>
                .
            </Fragment>
        ),
    },
];
