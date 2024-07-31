import { buttonVariants } from '@/components/ui/button';
import { discord } from '@/data/contacts';
import Link from 'next/link';

export function GetInvolved() {
    return (
        <section className="py-16 container">
            <div className="bg-gradient-to-r from-primary to-primary/50 rounded-lg border text-primary-foreground shadow-sm p-16">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <h2 className="w-fit">การมีส่วนร่วม</h2>
                        <p className="text-xl font-medium">
                            สนใจเข้าร่วมกิลด์ของเราหรือมีส่วนร่วมในโครงการของเราหรือไม่?
                            <br />
                            เชื่อมต่อกับเราได้ที่ดิสคอร์ดและเป็นส่วนหนึ่งของชุมชนที่กำลังเติบโตของเรา
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                        <Link
                            href={discord.link.href}
                            target="_blank"
                            className={buttonVariants({ variant: 'secondary', size: 'xl' })}
                        >
                            <discord.icon className="size-6 mr-2" />
                            เข้าร่วมดิสคอร์ดของเรา
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
