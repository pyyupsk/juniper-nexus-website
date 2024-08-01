import AboutImage from '@/assets/images/meetings/1.jpg';
import { DiscordButton } from '@/components/discord/button';
import { Widget } from '@/components/discord/widget';
import { Aurora } from '@/components/gradients/aurora';
import { buttonVariants } from '@/components/ui/button';
import { ArrowDown, Sparkles, UsersRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MembersAchievements } from './components/members-achievements';
import { Activities } from './components/sections/activities';
import { ContactsCard } from './components/sections/contacts-card';
import { GetInvolved } from './components/sections/get-involved';

export default function Page() {
    return (
        <main>
            <section className="relative h-screen flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src="https://lienquan.garena.vn/wp-content/uploads/2024/05/0c026845cdd6414fbd6c1bcb9fc70628660396d3c7f931.jpg"
                        alt="Garena RoV background"
                        width={1920}
                        height={1080}
                        className="object-cover w-full h-full opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                </div>
                <div className="container text-center relative">
                    <h1>ยินดีต้อนรับสู่ Juniper Nexus</h1>
                    <p className="text-xl">
                        เข้าร่วมชุมชนที่มีชีวิตชีวาของเราและยกระดับประสบการณ์ Garena RoV ของคุณให้ดียิ่งขึ้น!
                    </p>
                    <DiscordButton size="lg" rounded className="mt-8 hover:scale-105">
                        เข้าร่วมกิลด์ของเราบน Discord
                    </DiscordButton>
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
                            ที่ Juniper Nexus เรามุ่งเน้นการสร้างชุมชนที่อบอุ่นและสนุกสนานสำหรับผู้เล่น Garena RoV
                            เรามุ่งมั่นที่จะมอบสภาพแวดล้อมที่มีชีวิตชีวาและน่าดึงดูด
                            ซึ่งสมาชิกกิลด์ของเราสามารถเพลิดเพลินกับกิจกรรมที่หลากหลายและยกระดับประสบการณ์การเล่นเกมของพวกเขาให้ดียิ่งขึ้น
                        </p>
                        <div className="flex space-x-4 mt-8">
                            <DiscordButton>เข้าร่วมกิลด์ของเรา</DiscordButton>
                            <Link href="/about-us" className={buttonVariants({ variant: 'outline' })}>
                                เรียนรู้เพิ่มเติม
                            </Link>
                        </div>
                    </div>
                    <div className="relative aspect-video">
                        <Image
                            src={AboutImage}
                            alt="Juniper Nexus Guild Activities"
                            sizes="(100vw, 100vh)"
                            className="rounded-lg shadow-xl aspect-video object-cover"
                        />
                        <Aurora className="rounded-lg" />
                    </div>
                </div>
                <Activities />
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
                                    ความสำเร็จนี้สะท้อนถึงความมุ่งมั่น การทำงานเป็นทีม
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
                            <DiscordButton variant="secondary">เข้าร่วมกิลด์ของเรา</DiscordButton>
                        </div>
                    </div>
                </div>
            </section>
            <MembersAchievements limit={6} />
            <section className="py-16 container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2>เข้าร่วมชุมชน Discord ของเรา</h2>
                        <p className="leading">
                            ร่วมเป็นส่วนหนึ่งของชุมชนเกมที่มีชีวิตชีวาของเรา เชื่อมต่อกับเพื่อนเกมเมอร์ แบ่งปันกลยุทธ์
                            และรับข่าวสารล่าสุด
                        </p>
                        <DiscordButton size="lg" icon className="mt-8">
                            เข้าร่วม Discord ของเรา
                        </DiscordButton>
                    </div>
                    <Widget />
                </div>
            </section>
            <GetInvolved />
            <section className="py-16 container">
                <h2 className="text-center">ติดต่อเรา</h2>
                <ContactsCard />
            </section>
        </main>
    );
}
