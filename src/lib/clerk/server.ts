'use server';

import { currentUser as _currentUser, ExternalAccount } from '@clerk/nextjs/server';

export async function discordUser(): Promise<ExternalAccount | null> {
    const user = await _currentUser();

    if (!user) return null;

    const discord = user.externalAccounts.find((account) => account.provider === 'oauth_discord');

    if (!discord) return null;

    return discord;
}
