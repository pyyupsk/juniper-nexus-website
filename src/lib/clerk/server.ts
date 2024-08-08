'use server';

import { currentUser as _currentUser, clerkClient, ExternalAccount } from '@clerk/nextjs/server';

const PROVIDER = 'oauth_discord';

export async function discordUser(): Promise<ExternalAccount | null> {
    const user = await _currentUser();

    if (!user) return null;

    const discord = user.externalAccounts.find((account) => account.provider === PROVIDER);

    if (!discord) return null;

    return discord;
}

export async function discordToken(): Promise<string | null> {
    const user = await _currentUser();

    if (!user) return null;

    const discord = user;

    if (!discord) return null;

    const token = await clerkClient().users.getUserOauthAccessToken(discord.id, PROVIDER);

    return token.data[0].token;
}
