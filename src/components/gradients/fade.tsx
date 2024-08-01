import { cn } from '@/lib/utils';

type Props = {
    to?: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br';
    via?: string;
    stop?: string;
    className?: string;
};

export function Fade({ to = 't', via = 'transparent', stop, className }: Props) {
    const gradient = `bg-gradient-to-${to} from-background via-${via} to-${stop}`;

    return <div className={cn('absolute inset-0', gradient, className)} />;
}
