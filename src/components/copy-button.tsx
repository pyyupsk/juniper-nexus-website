'use client';

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ClipboardCheck, ClipboardCopy } from 'lucide-react';
import { useState } from 'react';

export function CopyButton({ text, className }: { text: string; className?: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        toast({
            title: 'คัดลอกแล้ว',
            description: `คัดลอก ID:${text} ไปยังคลิปบอร์ดของคุณแล้ว`,
        });

        setTimeout(() => setCopied(false), 2000);
    };

    const size = copied ? 'default' : 'icon';

    return (
        <Button variant="outline" size={size} className={className} onClick={handleCopy}>
            {copied ? <ClipboardCheck className="size-4" /> : <ClipboardCopy className="size-4" />}
            {copied && <span className="text-xs ml-1">คัดลอกแล้ว</span>}
            <span className="sr-only">คัดลอก</span>
        </Button>
    );
}
