import LeaderboardImage from '@/assets/images/leaderboard.jpg';
import Event1 from '@/assets/images/meetings/2.jpg';
import Event2 from '@/assets/images/meetings/3.jpg';
import Event3 from '@/assets/images/meetings/4.jpg';
import Event4 from '@/assets/images/meetings/5.jpg';
import { DiscordButton } from '@/components/discord/button';
import { Aurora } from '@/components/gradients/aurora';
import { commonMetaData } from '@/lib/meta';
import { Sparkles, UsersRound } from 'lucide-react';
import Image from 'next/image';
import { MembersAchievements } from '../components/members-achievements';
import { GetInvolved } from '../components/sections/get-involved';

export async function generateMetadata() {
    const title = 'เกี่ยวกับเรา';
    const description =
        'มารู้จักกับ Juniper Nexus! เรามุ่งมั่นที่จะสร้างสภาพแวดล้อมที่สนุกสนานและสนับสนุนสำหรับผู้เล่น Garena RoV ด้วยภารกิจในการยกระดับประสบการณ์การเล่นเกมและวิสัยทัศน์ที่จะเป็นกิลด์ชั้นนำในประเทศไทย เข้าร่วมกับเราสำหรับกิจกรรม การแข่งขัน และความสำเร็จที่ยิ่งใหญ่!';

    return commonMetaData({ title, description });
}

export default function Page() {
    return (
        <main className="mt-16">
            <section className="py-16 container">
                <h2>ภารกิจและวิสัยทัศน์ของเรา</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <h3 className="text-primary">ภารกิจ</h3>
                        <p className="leading">
                            ที่ Juniper Nexus เรามุ่งมั่นที่จะสร้างสภาพแวดล้อมที่มีชีวิตชีวาและน่าดึงดูดสำหรับผู้เล่น
                            Garena RoV
                            ภารกิจของเราคือการยกระดับประสบการณ์การเล่นเกมโดยการส่งเสริมชุมชนที่ให้การสนับสนุนและกระตือรือร้น
                        </p>
                    </div>
                    <div>
                        <h3 className="text-primary">วิสัยทัศน์</h3>
                        <p className="leading">
                            วิสัยทัศน์ของเราคือการเป็นกิลด์ชั้นนำใน Garena RoV
                            ซึ่งเป็นที่รู้จักจากความสำเร็จและความผูกพันอันแข็งแกร่งที่เราสร้างขึ้นในหมู่สมาชิกของเรา
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 container">
                <h2>ความสำเร็จของเรา</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                    <div className="space-y-8">
                        <div className="bg-card border text-card-foreground p-6 transform skew-x-3 hover:skew-x-0 transition-transform duration-300">
                            <Sparkles className="size-10 mb-4" />
                            <h3>ติดอันดับ 50 กิลด์ชั้นนำของประเทศไทย</h3>
                            <p className="muted">
                                เราภูมิใจที่ได้รับการจัดอันดับเป็นหนึ่งใน 50 กิลด์ที่ดีที่สุดของประเทศไทย
                                ความสำเร็จนี้สะท้อนถึงความมุ่งมั่น การทำงานเป็นทีม
                                และความหลงใหลในการสร้างชุมชนที่ยอดเยี่ยมในโลกของเกม
                            </p>
                        </div>
                        <div className="bg-card border text-card-foreground p-6 transform -skew-x-3 hover:skew-x-0 transition-transform duration-300">
                            <UsersRound className="size-10 mb-4" />
                            <h3>สมาชิกที่ทุ่มเทมากกว่า 100 คน</h3>
                            <p className="muted">
                                เรามีสมาชิกที่ทุ่มเทมากกว่า 100 คน และจำนวนยังคงเติบโตอย่างต่อเนื่อง!
                                เข้าร่วมกับเราเพื่อเป็นส่วนหนึ่งของชุมชนที่แข็งแกร่งและเติบโตอย่างรวดเร็ว
                            </p>
                        </div>
                    </div>
                    <div className="bg-card border p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                        <div className="flex flex-col justify-center items-center h-full min-h-96">
                            <div className="relative border-4 border-primary w-full h-full">
                                <div className="absolute inset-0">
                                    <Image
                                        src={LeaderboardImage}
                                        alt="Leaderboard Screenshot"
                                        sizes="(100vw, 100vh)"
                                        className="object-cover w-full h-full opacity-80"
                                    />
                                    <Aurora />
                                </div>
                            </div>
                            <p className="italic muted quote text-sm mt-4">
                                Juniper Nexus ได้รับการจัดอันดับให้เป็นหนึ่งในกิลด์ชั้นนำของประเทศไทยอย่างภาคภูมิใจ
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <p className="italic quote">Juniper Nexus ภูมิใจในความสำเร็จและการเติบโตอย่างต่อเนื่องของเรา</p>
                    <p className="quote">เราเฉลิมฉลองในแต่ละเหตุการณ์สำคัญและมุ่งมั่นสู่ความเป็นเลิศ</p>
                </div>
            </section>
            <MembersAchievements limit={6} />
            <section className="py-16 container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2>ชุมชนและกิจกรรม</h2>
                        <p className="leading">
                            กิลด์ของเราไม่ใช่แค่กลุ่มผู้เล่น แต่เป็นครอบครัวที่เต็มไปด้วยความรักและการสนับสนุน
                            เราจัดงานกิจกรรม การแข่งขัน
                            และการพบปะสังสรรค์เป็นประจำเพื่อให้ชุมชนของเรามีส่วนร่วมและเชื่อมโยงกันอย่างแน่นแฟ้น
                        </p>
                        <p className="leading">
                            เข้าร่วมกับเราบน Discord เพื่อร่วมกิจกรรมสนุกสนานและเชื่อมต่อกับสมาชิกคนอื่นๆ ในครอบครัว
                            Juniper Nexus!
                        </p>
                        <DiscordButton className="mt-8">เข้าร่วม Discord ของเรา</DiscordButton>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[Event1, Event2, Event3, Event4].map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Event ${index + 1}`}
                                sizes="(100vw, 100vh)"
                                className="aspect-[3/2] object-cover border shadow-sm rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </section>
            <GetInvolved />
        </main>
    );
}
