import { discordUser } from '@/lib/clerk/server';
import { prisma } from '@/lib/prisms';
import { redirect } from 'next/navigation';
import { Fragment, ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
    const discord = await discordUser();

    if (!discord) {
        return redirect('/sign-in');
    }

    const userId = await prisma.users
        .findUnique({
            where: {
                discord_id: discord.externalId,
            },
        })
        .then((user) => user?.id || null);

    if (!userId) {
        return redirect('/sign-in');
    }

    const profile = await prisma.profile
        .findFirst({
            where: {
                user_id: userId,
            },
        })
        .then((profile) => profile || null);

    if (!profile) {
        return redirect('/me/onboarding');
    }

    return <Fragment>{children}</Fragment>;
}

export const revalidate = 3600; // revalidate at most every hour
