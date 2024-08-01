import { cn } from '@/lib/utils';

export function Aurora({ className }: { className?: string }) {
    return <div className={cn('absolute inset-0 bg-gradient-to-br from-blue-500 to-primary opacity-20', className)} />;
}
