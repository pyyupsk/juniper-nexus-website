import { env } from '@/env';
import { prisma } from '@/lib/prisms';
import dynamic from 'next/dynamic';

const production = env.NODE_ENV === 'production';

const Panel = dynamic(() => import('./components/panel').then((mod) => mod.Panel), { ssr: false });

export default async function Page() {
    const users = production
        ? await prisma.users.findMany()
        : Array.from({ length: 20 }).map(() => ({
              id: Math.floor(Math.random() * 1000),
              discord_id: Math.floor(Math.random() * 1000).toString(),
              username: Math.floor(Math.random() * 1000).toString(),
              created_at: new Date(),
          }));

    return <Panel users={users} />;
}
