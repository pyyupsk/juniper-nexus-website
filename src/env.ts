import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(['development', 'test', 'production']),
        FORM_ACCESS_KEY: z.string(),
        DISCORD_BOT_TOKEN: z.string(),
    },
    client: {
        NEXT_PUBLIC_DISCORD_GUILD_ID: z.string(),
        NEXT_PUBLIC_MEMBER_ROLE_ID: z.string(),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        FORM_ACCESS_KEY: process.env.FORM_ACCESS_KEY,
        NEXT_PUBLIC_DISCORD_GUILD_ID: process.env.NEXT_PUBLIC_DISCORD_GUILD_ID,
        NEXT_PUBLIC_MEMBER_ROLE_ID: process.env.NEXT_PUBLIC_MEMBER_ROLE_ID,
        DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    },
});
