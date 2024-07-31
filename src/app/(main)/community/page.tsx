import MeetingImage from '@/assets/images/meetings/6.jpg';
import { DiscordWidget } from '@/components/discord-widget';
import { buttonVariants } from '@/components/ui/button';
import { discord } from '@/data/contacts';
import { community } from '@/data/guidelines/community';
import { member } from '@/data/guidelines/member';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MembersAchievements } from '../components/members-achievements';
import { Activities } from '../components/sections/activities';
import { FeedbackForm } from '../components/sections/feedback-form';

export default function Page() {
    return (
        <main className="mt-16">
            <section className="py-16 container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-primary border-b-4 border-primary inline-block transform -skew-x-6">
                            ยินดีต้อนรับสู่ Juniper Nexus
                        </h2>
                        <p className="leading">
                            Juniper Nexus เป็นมากกว่ากิลด์ แต่เป็นชุมชนที่ผู้เล่นมารวมตัวกันเพื่อแบ่งปันประสบการณ์
                            เข้าร่วมในกิจกรรม และสร้างมิตรภาพที่ยั่งยืน
                        </p>
                        <p className="leading">
                            ที่นี่ คุณจะพบข้อมูลเกี่ยวกับวิธีการมีส่วนร่วม กิจกรรมที่กำลังจะเกิดขึ้น
                            และวิธีการเชื่อมต่อกับเรา
                        </p>
                        <Link
                            href={discord.link.href}
                            target="_blank"
                            className={buttonVariants({ className: 'mt-8' })}
                        >
                            เข้าร่วมชุมชนของเรา
                        </Link>
                    </div>

                    <div className="relative">
                        <Image
                            src={MeetingImage}
                            alt="Juniper Nexus Community"
                            sizes="(100vw, 100vh)"
                            className="w-full h-auto rounded-lg shadow-lg transform -rotate-3"
                        />
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-bold py-2 px-4 rounded-bl-lg transform rotate-3">
                            Meeting ครั้งที่ 2
                        </div>
                    </div>
                </div>
                <Activities />
            </section>
            <section className="py-16 container max-w-3xl">
                <div className="flex flex-col items-center">
                    <h2>เชื่อมต่อกับเราบนดิสคอร์ด</h2>
                    <p className="leading text-center">
                        เซิร์ฟเวอร์ Discord ของเราคือหัวใจของชุมชนของเรา เข้าร่วมกับเราเพื่อมีส่วนร่วมในการอภิปราย
                        กิจกรรม และอื่นๆ อีกมากมาย
                    </p>
                    <DiscordWidget className="w-full mt-8" />
                    <Link
                        href={discord.link.href}
                        target="_blank"
                        className={buttonVariants({ size: 'xl', className: 'mt-8' })}
                    >
                        เข้าร่วมดิสคอร์ดของเรา
                    </Link>
                </div>
            </section>
            <section className="py-16 container">
                <div className="rounded-lg border border-primary shadow-lg p-16 relative">
                    <div className="absolute inset-0">
                        <Image
                            src="https://lienquan.garena.vn/wp-content/uploads/2024/05/b12e3849968a910bd641d3213419f3986597b67bbeda61.jpg"
                            alt="Realm of Valor Characters"
                            width={1400}
                            height={800}
                            className="object-cover w-full h-full opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-primary opacity-20 rounded-lg" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                        <div>
                            <h3>หลักเกณฑ์ของชุมชน</h3>
                            <ul className="space-y-6">
                                {community.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckCircle className="size-5 text-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="quote">
                                เพื่อให้มั่นใจว่าทุกคนจะได้รับประสบการณ์ที่ดี โปรดประติบัติตามหลักเกณฑ์ของเรา
                            </p>
                        </div>
                        <div>
                            <h3>กฎกิลด์สำหรับสมาชิกกิลด์</h3>
                            <ul className="space-y-6">
                                {member.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckCircle className="size-5 text-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="quote">
                                สมาชิกที่ละเมิดกฏหรือข้อกำหนดของกิลด์และเซิฟเวอร์จะได้รับการลงโทษตามบทลงโทษที่เหมาะสม,
                                เช่น การเตือน, การห้ามเข้าถึง, และบางครั้งอาจมีการเตะออกจากเซิฟเวอร์
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <MembersAchievements limit={3} />
            <FeedbackForm />
        </main>
    );
}
