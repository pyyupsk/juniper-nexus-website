'use server';

import { DISCORD_API } from '@/constants';
import { env } from '@/env';
import { prisma } from '@/lib/prisms';
import { MemberMember } from './members';

const GUILD_ID = env.NEXT_PUBLIC_DISCORD_GUILD_ID;
const ROLE_ID = env.NEXT_PUBLIC_MEMBER_ROLE_ID;

export type AddResult = {
    success: boolean;
    message: string;
    data?: any;
};

export async function add(member: MemberMember): Promise<AddResult> {
    const response = await fetch(`${DISCORD_API}/guilds/${GUILD_ID}/members/${member.user.id}/roles/${ROLE_ID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
        },
    });

    if (!response.ok) return { success: false, message: 'ไม่สามารถเพิ่มสิทธิ์ได้' };

    try {
        const id = (await prisma.users.count()) + 2;

        await prisma.users.create({
            data: {
                id,
                discord_id: member.user.id,
                username: member.user.username,
            },
        });

        return { success: true, message: 'สมัครสมาชิกเรียบร้อย' };
    } catch (error: any) {
        if (error.code === 'P2002') {
            return { success: false, message: 'มีผู้ใช้งานอยู่แล้ว' };
        } else {
            console.error(error);
            return { success: false, message: 'ไม่สามารถเพิ่มสมาชิกลงบนฐานข้อมูลได้' };
        }
    }
}
