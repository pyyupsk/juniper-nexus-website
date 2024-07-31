import { IcOutlineDiscord } from '@/components/icons/IcOutlineDiscord';
import { IcOutlineFacebook } from '@/components/icons/IcOutlineFacebook';
import { IcOutlineMail } from '@/components/icons/IcOutlineMail';
import React from 'react';

type Contact = {
    type: 'support' | 'social';
    name: string;
    icon: React.ElementType;
    title: string;
    description: string;
    link: {
        label: string;
        href: string;
    };
};

export const email: Contact = {
    type: 'support',
    name: 'อีเมล',
    icon: IcOutlineMail,
    title: 'ส่งอีเมลถึงเรา',
    description: 'เราพร้อมให้ความช่วยเหลือหากมีคำถามหรือข้อสงสัย',
    link: {
        label: 'juniper.nexus24@gmail.com',
        href: 'mailto:juniper.nexus24@gmail.com',
    },
};

export const discord: Contact = {
    type: 'social',
    name: 'ดิสคอร์ด',
    icon: IcOutlineDiscord,
    title: 'เข้าร่วมดิสคอร์ดของเรา',
    description: 'เชื่อมต่อกับชุมชนของเราเพื่อรับการสนับสนุน',
    link: {
        label: 'เข้าร่วมดิสคอร์ด',
        href: 'https://discord.gg/juniper-nexus',
    },
};

export const facebook: Contact = {
    type: 'social',
    name: 'เฟสบุ๊ค',
    icon: IcOutlineFacebook,
    title: 'เฟสบุ๊คแฟนเพจ',
    description: 'ติดตามเราได้ที่เฟสบุ๊คแฟนเพจของเรา',
    link: {
        label: 'Junipernexus',
        href: 'https://www.facebook.com/profile.php?id=61556303832596',
    },
};

export const contacts: Contact[] = [email, discord, facebook];
