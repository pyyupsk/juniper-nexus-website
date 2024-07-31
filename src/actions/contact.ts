'use server';

import { env } from '@/env';

export type SendResponse = {
    success: boolean;
    message: string;
};

export async function send(values: { [key: string]: string }): Promise<SendResponse> {
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, access_key: env.FORM_ACCESS_KEY }),
    });

    if (!response.ok) {
        return {
            success: false,
            message: 'มีบางอย่างผิดพลาด โปรดลองอีกครั้งในภายหลัง',
        };
    }

    return {
        success: true,
        message: 'ขอบคุณสำหรับข้อความของคุณ เราจะติดต่อกลับโดยเร็วที่สุด',
    };
}
