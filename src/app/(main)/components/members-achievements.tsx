import { CopyButton } from '@/components/copy-button';
import { buttonVariants } from '@/components/ui/button';
import { prisma } from '@/lib/prisms';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    limit?: number | undefined;
};

export async function MembersAchievements({ limit = undefined }: Props) {
    const achievements = await prisma.achievements.findMany({
        orderBy: { id: 'asc' },
        take: limit ? limit : undefined,
    });

    return (
        <section className="py-16 container">
            <h2 className="text-center">ความสำเร็จของสมาชิก</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                {achievements.map((achievement, index) => (
                    <div key={index} className="rounded-t-lg border-b border-primary shadow-lg transform relative">
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

export const revalidate = 3600; // revalidate at most every hour
