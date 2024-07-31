import LogoImage from '@/assets/images/logo.webp';
import Image from 'next/image';

type Props = {
    width?: number;
    height?: number;
    className?: string;
};

export function Logo({ width = 40, height = 40, className }: Props) {
    return <Image src={LogoImage} alt="Juniper Nexus Logo" width={width} height={height} className={className} />;
}
