'use client';

import { env } from '@/env';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IcOutlineDiscord } from '../icons/IcOutlineDiscord';
import { buttonVariants } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

export interface WidgetResponse {
    id: string;
    name: string;
    instant_invite: string;
    channels: any[];
    members: Member[];
    presence_count: number;
}

export interface Member {
    id: string;
    username: string;
    discriminator: string;
    avatar: null;
    status: Status;
    avatar_url: string;
    game?: Game;
    deaf?: boolean;
    mute?: boolean;
    self_deaf?: boolean;
    self_mute?: boolean;
    suppress?: boolean;
    channel_id?: string;
}

export interface Game {
    name: string;
}

export enum Status {
    // eslint-disable-next-line no-unused-vars
    DND = 'dnd',
    // eslint-disable-next-line no-unused-vars
    Idle = 'idle',
    // eslint-disable-next-line no-unused-vars
    Online = 'online',
}

export function Widget({ className }: { className?: string }) {
    const [data, setData] = useState<WidgetResponse>({
        id: '',
        name: '',
        instant_invite: '',
        channels: [],
        members: [],
        presence_count: 0,
    });

    function statusColor(status: Status) {
        switch (status) {
            case Status.DND:
                return 'border-red-500';
            case Status.Idle:
                return 'border-yellow-500';
            case Status.Online:
                return 'border-green-500';
        }
    }

    useEffect(() => {
        fetch(`https://discordapp.com/api/guilds/${env.NEXT_PUBLIC_DISCORD_GUILD_ID}/widget.json`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <Card className={className}>
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <IcOutlineDiscord className="size-8" />
                        <span className="large">Discord</span>
                    </div>
                    <span className="large">{data.presence_count} สมาชิกออนไลน์</span>
                </div>
            </CardHeader>
            <CardContent className="p-6 h-80 overflow-hidden">
                <p className="muted">สมาชิกที่ออนไลน์</p>
                <div className="h-[calc(100%-1rem)] overflow-y-auto">
                    <ul className="space-y-1 list-none">
                        {data.members.map(({ id, username, avatar_url, status, game }) => (
                            <li key={id} className="flex items-center space-x-2">
                                <Image
                                    src={avatar_url}
                                    alt={username}
                                    width={24}
                                    height={24}
                                    className={cn(
                                        'rounded-full border-2',
                                        statusColor(status),
                                        game && 'animate-pulse',
                                    )}
                                />
                                <span className="muted text-sm">{username}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t p-6">
                <p>เริ่มแฮงเอาท์กับพวกเราบนดิสคอร์ด</p>
                <Link href={data.instant_invite} target="_blank" className={buttonVariants()}>
                    เข้าร่วมดิสคอร์ด
                </Link>
            </CardFooter>
        </Card>
    );
}
