import { Drama, HeartHandshake, LineChart, SmilePlus } from 'lucide-react';
import { ElementType } from 'react';

type Value = {
    icon: ElementType;
    title: string;
    description: string;
};

export const values: Value[] = [
    {
        icon: HeartHandshake,
        title: 'ความสามัคคี',
        description: 'เราส่งเสริมความสามัคคีในหมู่สมาชิก สร้างความผูกพันที่แน่นแฟ้นและชุมชนที่ให้การสนับสนุน',
    },
    {
        icon: Drama,
        title: 'การไม่แบ่งแยก',
        description: 'เรายินดีต้อนรับความหลากหลายและสร้างสภาพแวดล้อมที่ไม่แบ่งแยกซึ่งทุกคนรู้สึกมีคุณค่า',
    },
    {
        icon: LineChart,
        title: 'ความเป็นเลิศ',
        description: 'เรามุ่งมั่นสู่ความเป็นเลิศในด้านการเล่นเกม การมีส่วนร่วมของชุมชน และการเติบโตส่วนบุคคล',
    },
    {
        icon: SmilePlus,
        title: 'สนุก',
        description: 'เราเชื่อในการสนุกสนานร่วมกันสร้างประสบการณ์ที่น่าจดจำให้กับสมาชิกทุกคน',
    },
];
