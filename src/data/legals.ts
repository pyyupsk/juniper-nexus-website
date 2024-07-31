import { GlobeLock, Handshake } from 'lucide-react';
import { ElementType } from 'react';
import { Url } from './links';

type LegalProps = Url & {
    icon: ElementType;
};

export const legals: LegalProps[] = [
    {
        name: 'นโยบายความเป็นส่วนตัว',
        href: '/privacy',
        icon: Handshake,
    },
    {
        name: 'ข้อกำหนดและเงื่อนไข',
        href: '/terms',
        icon: GlobeLock,
    },
];
