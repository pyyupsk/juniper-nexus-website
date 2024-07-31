import HeroImage from '@/assets/images/meetings/1.jpg';
import AboutImage from '@/assets/images/meetings/5.jpg';
import { DiscordWidget } from '@/components/discord-widget';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { contacts, discord } from '@/data/contacts';
import { activities } from '@/data/guild/activities';
import { cn } from '@/lib/utils';
import { ArrowDown, Sparkles, UsersRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MembersAchievements } from './components/members-achievements';

export default function Page() {
    return (
        <main>
            <section className="relative h-screen flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src={HeroImage}
                        alt="Garena RoV background"
                        sizes="(100vw, 100vh)"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                </div>
                <div className="z-10 container text-center">
                    <h1>ยินดีต้อนรับสู่ Juniper Nexus</h1>
                    <p className="text-xl">เข้าร่วมชุมชนที่มีชีวิตชีวาของเราและปรับปรุงประสบการณ์ Garena RoV ของคุณ!</p>
                    <Link
                        href={discord.link.href}
                        target="_blank"
                        className={buttonVariants({ size: 'lg', rounded: true, className: 'mt-8 hover:scale-105' })}
                    >
                        เข้าร่วมกิลด์ของเราบนดิสคอร์ด
                    </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center">
                    <ArrowDown className="animate-bounce size-8" />
                </div>
            </section>
            <section className="py-16 container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2>เกี่ยวกับเรา</h2>
                        <p className="leading">
                            Juniper Nexus มุ่งเน้นการสร้างชุมชนที่อบอุ่นและสนุกสนานสำหรับผู้เล่น Garena RoV
                            เรามุ่งมั่นที่จะมอบสภาพแวดล้อมที่มีชีวิตชีวาและน่าดึงดูด
                            <br />
                            สมาชิกกิลด์สามารถเพลิดเพลินกับกิจกรรมต่าง ๆ และปรับปรุงประสบการณ์การเล่นเกมของพวกเขา.
                        </p>
                        <div className="flex space-x-4 mt-8">
                            <Link href={discord.link.href} target="_blank" className={buttonVariants()}>
                                เข้าร่วมกิลด์ของเรา
                            </Link>
                            <Link href="/about-us" className={buttonVariants({ variant: 'outline' })}>
                                เรียนรู้เพิ่มเติม
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-64 lg:h-auto">
                        <Image
                            src={AboutImage}
                            alt="Juniper Nexus Guild Activities"
                            sizes="(100vw, 100vh)"
                            className="rounded-lg shadow-xl w-full h-full max-h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-primary opacity-20 rounded-lg"></div>
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                    {activities.map(({ name, icon, description }) => (
                        <Card key={name}>
                            <CardHeader>
                                <icon.svg className={cn('size-12 mx-auto mb-4', icon.className)} />
                                <CardTitle>{name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="muted">{description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            <section className="py-16 container">
                <h2 className="text-center">ความสำเร็จของกิลด์</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
                    <div className="bg-gradient-to-br from-primary to-primary/50 rounded-lg border text-primary-foreground shadow-sm p-6 h-full">
                        <div className="flex flex-col justify-between h-full space-y-4">
                            <div>
                                <h3>ติดอันดับ 50 กิลด์ชั้นนำของประเทศไทย</h3>
                                <p className="text-lg">
                                    เราภูมิใจที่ได้รับการจัดอันดับเป็นหนึ่งใน 50 กิลด์ที่ดีที่สุดของประเทศไทย
                                    ความสำเร็จนี้เป็นการสะท้อนถึงความมุ่งมั่น การทำงานเป็นทีม
                                    และความหลงใหลในการสร้างชุมชนที่ยอดเยี่ยมในโลกของเกม
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Sparkles className="size-6" />
                                <span className="font-semibold">ความสำเร็จอันยิ่งใหญ่</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-primary/50 rounded-lg border text-primary-foreground shadow-sm p-6 h-full">
                        <div className="flex flex-col justify-between h-full space-y-4">
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <UsersRound className="size-6" />
                                        <h3>จำนวนสมาชิก</h3>
                                    </div>
                                    <span className="scroll-m-20 font-semibold tracking-tight text-2xl">100+</span>
                                </div>
                                <p className="text-lg">
                                    เรามีสมาชิกที่ทุ่มเทมากกว่า 100 คน และจำนวนยังคงเติบโตอย่างต่อเนื่อง!
                                    เข้าร่วมกับเราเพื่อเป็นส่วนหนึ่งของชุมชนที่แข็งแกร่งและเติบโตอย่างรวดเร็ว
                                </p>
                            </div>
                            <Link
                                href={discord.link.href}
                                target="_blank"
                                className={buttonVariants({ variant: 'secondary' })}
                            >
                                เข้าร่วมกิลด์ของเรา
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <MembersAchievements limit={3} />
            <section className="py-16 container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2>เข้าร่วมชุมชนดิสคอร์ดของเรา</h2>
                        <p className="leading">
                            ร่วมเป็นส่วนหนึ่งของชุมชนเกมที่มีชีวิตชีวาของเราเชื่อมต่อกับเพื่อนเกมเมอร์แบ่งปันกลยุทธ์และข่าวสารล่าสุด
                        </p>
                        <Link
                            href={discord.link.href}
                            target="_blank"
                            className={buttonVariants({ size: 'lg', className: 'mt-8' })}
                        >
                            <discord.icon className="size-6 mr-2" />
                            <span>เข้าร่วมดิสคอร์ดของเรา</span>
                        </Link>
                    </div>
                    <DiscordWidget />
                </div>
            </section>
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
            <section className="py-16 container">
                <h2 className="text-center">ติดต่อเรา</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                    {contacts.map((contact) => (
                        <div
                            key={contact.title}
                            className="bg-gradient-to-br flex flex-col justify-between from-primary to-primary/50 text-primary-foreground p-6 rounded-lg shadow-sm"
                        >
                            <div>
                                <contact.icon className="size-12 mb-4" />
                                <h3>{contact.title}</h3>
                            </div>
                            <div>
                                <p className="font-medium">{contact.description}</p>
                                <Link
                                    href={contact.link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={buttonVariants({
                                        variant: 'secondary',
                                        className: 'w-full lg:w-auto mt-4',
                                    })}
                                >
                                    <span className="hidden lg:inline">{contact.link.label}</span>
                                    <span className="inline lg:hidden">{contact.name}</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
