import { env } from '@/env';
import { prisma } from '@/lib/prisms';
import { Panel } from './components/panel';

const production = env.NODE_ENV === 'production';

export default async function Page() {
    const users = production
        ? await prisma.user.findMany()
        : Array.from({ length: 20 }).map(() => ({
              id: Math.floor(Math.random() * 1000),
              user_id: Math.floor(Math.random() * 1000).toString(),
              username: Math.floor(Math.random() * 1000).toString(),
          }));

    return <Panel users={users} />;
}
