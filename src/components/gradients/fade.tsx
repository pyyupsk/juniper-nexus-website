import { cn } from '@/lib/utils';

type Props = {
    direction?: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br';
    via?: string;
    to?: string;
    className?: string;
};

export function Fade({ direction = 't', via = 'transparent', to, className }: Props) {
    return (
        <div
            className={cn(
                `absolute inset-0 bg-gradient-to-${direction} from-background via-${via} ${to && `to-${to}`}`,
                className,
            )}
        />
    );
}
