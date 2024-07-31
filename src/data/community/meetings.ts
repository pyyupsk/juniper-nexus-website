import Meeting1 from '@/assets/images/meetings/1.jpg';
import Meeting2 from '@/assets/images/meetings/6.jpg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Meeting = {
    thumbnail: string | StaticImport;
    name: string;
    description: string;
};

export const meetings: Meeting[] = [
    {
        thumbnail: Meeting1,
        name: 'ครั้งที่ 1 - ล่าลายเซ็น',
        description: 'กิจกรรมล่าลายเซ็นผู้เล่น Garena RoV มอบให้เพื่อนๆ และน้องๆ ในกิจกรรมกิลด์ครั้งหน้า',
    },
    {
        thumbnail: Meeting2,
        name: 'ครั้งที่ 2 - ร้องเพลงคาราโอเกะ',
        description: 'คืนแห่งเสียงเพลงและความสนุกกับการ้องเพลงคาราโอเกะ เสริมสร้างความสัมพันธ์ในกิลด์',
    },
];
