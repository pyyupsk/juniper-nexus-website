import { CalendarRange, Crown, HandCoins } from 'lucide-react';
import { ElementType } from 'react';

type Activity = {
    name: string;
    icon: {
        svg: ElementType;
        className?: string;
    };
    description: string;
};

export const activities: Activity[] = [
    {
        name: 'เข้าร่วมกิจกรรมสนุกๆ',
        icon: {
            svg: CalendarRange,
            className: 'text-blue-500',
        },
        description:
            'ร่วมกิจกรรมที่หลากหลายกับชุมชนของเราเพื่อสร้างความสัมพันธ์อันแน่นแฟ้นและเพิ่มพูนประสบการณ์การเล่นเกมของคุณให้ดียิ่งขึ้น',
    },
    {
        name: 'การประชุมกลยุทธ์',
        icon: {
            svg: Crown,
            className: 'text-yellow-500',
        },
        description: 'เข้าร่วมการประชุมกลยุทธ์เพื่อวางแผนและปรับปรุงกลยุทธ์การเล่นของคุณร่วมกับผู้เล่นคนอื่นๆ',
    },
    {
        name: 'โปรแกรมสิทธิพิเศษ',
        icon: {
            svg: HandCoins,
            className: 'text-green-500',
        },
        description: 'รับรางวัลและสิทธิพิเศษจากการมีส่วนร่วมในกิจกรรมและการทำภารกิจสำเร็จในเกมของเรา',
    },
];
