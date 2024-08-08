'use server';

import { DISCORD_API } from '@/constants';
import { env } from '@/env';

const GUILD_ID = env.NEXT_PUBLIC_DISCORD_GUILD_ID;

export interface MembersSearch {
    guild_id: string;
    members: MemberElement[];
    page_result_count: number;
    total_result_count: number;
}

export interface MemberElement {
    member: MemberMember;
    join_source_type: number;
    inviter_id: null | string;
}

export interface MemberMember {
    avatar: null;
    banner: null;
    communication_disabled_until: null;
    flags: number;
    joined_at: Date;
    nick: null | string;
    pending: boolean;
    premium_since: null;
    roles: string[];
    unusual_dm_activity_until: null;
    user: User;
    mute: boolean;
    deaf: boolean;
}

export interface User {
    id: string;
    username: string;
    avatar: null | string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: null;
    accent_color: null;
    global_name: null | string;
    avatar_decoration_data: AvatarDecorationData | null;
    banner_color: null;
    clan: null;
}

export interface AvatarDecorationData {
    asset: string;
    sku_id: string;
    expires_at: null;
}

export async function search(): Promise<MemberElement[] | null> {
    const response = await fetch(`${DISCORD_API}/guilds/${GUILD_ID}/members-search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
        },
        body: JSON.stringify({
            or_query: {},
            and_query: {},
            limit: 250,
        }),
    });

    if (!response.ok) return null;

    const { members }: MembersSearch = await response.json();
    return members;
}
