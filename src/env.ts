import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(['development', 'test', 'production']),
        FORM_ACCESS_KEY: z.string(),
        // DATABASE_URL: z.string().url(),
    },
    client: {
        NEXT_PUBLIC_DISCORD_GUILD_ID: z.string(),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        FORM_ACCESS_KEY: process.env.FORM_ACCESS_KEY,
        // DATABASE_URL: process.env.DATABASE_URL,
        NEXT_PUBLIC_DISCORD_GUILD_ID: process.env.NEXT_PUBLIC_DISCORD_GUILD_ID,
    },
});
