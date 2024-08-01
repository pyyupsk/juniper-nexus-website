import { randomInt } from 'crypto';
import { CopyButton } from '@/components/copy-button';
import { buttonVariants } from '@/components/ui/button';
import { env } from '@/env';
import { prisma } from '@/lib/prisms';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    limit?: number | undefined;
};

export async function MembersAchievements({ limit = undefined }: Props) {
    const achievements =
        env.NODE_ENV === 'production'
            ? await prisma.achievements.findMany({
                  orderBy: { id: 'asc' },
                  take: limit,
                  select: {
                      id: true,
                      title: true,
                      description: true,
                      image: true,
                      member: true,
                  },
              })
            : Array.from({ length: limit ?? randomInt(5, 20) }, (_, i) => ({
                  id: `test-${i}`,
                  title: 'title',
                  description: 'description',
                  image: 'https://placeholder.com/500x500',
                  member: `member-${i}`,
              }));

    return (
        <section className="py-16 container">
            <h2 className="text-center">ความสำเร็จของสมาชิก</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                {achievements.map((achievement) => (
                    <div
                        key={achievement.id}
                        className="rounded-t-lg border-b border-primary shadow-lg transform relative"
                    >
                        <CopyButton text={achievement.id} className="absolute top-2 right-2" />
                        <Image
                            src={achievement.image}
                            alt={achievement.description}
                            className="w-full h-48 object-cover rounded-t-lg object-top"
                            width={500}
                            height={500}
                        />
                        <div className="py-6">
                            <h3>{achievement.title}</h3>
                            <p className="-mb-4">
                                {achievement.member} (<code>{achievement.id}</code>)
                            </p>
                            <p className="muted">{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {limit && (
                <div className="text-center">
                    <Link href="/members-achievements" className={buttonVariants({ size: 'lg' })}>
                        เข้าชมสำเร็จของสมาชิกทั้งหมด
                    </Link>
                </div>
            )}
        </section>
    );
}
