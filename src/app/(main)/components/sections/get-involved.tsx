import { DiscordButton } from '@/components/discord/button';
import { Aurora } from '@/components/gradients/aurora';
import { Fade } from '@/components/gradients/fade';
import Image from 'next/image';

export function GetInvolved() {
    return (
        <section className="py-16 container">
            <div className="relative rounded-lg shadow-sm p-16">
                <Image
                    src="https://lienquan.garena.vn/wp-content/uploads/2024/07/15901.jpg"
                    alt="Garena RoV Background"
                    width={1920}
                    height={1080}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    priority
                />
                <Aurora className="rounded-lg opacity-50" />
                <Fade direction="r" via="background/50" to="transparent" className="rounded-md" />
                <div className="relative flex items-center justify-between">
                    <div className="flex-1">
                        <h2>การมีส่วนร่วม</h2>
                        <p className="text-xl font-medium">
                            สนใจเข้าร่วมกิลด์ของเราหรือมีส่วนร่วมในโครงการของเราหรือไม่?
                            <br />
                            เชื่อมต่อกับเราผ่าน Discord และเป็นส่วนหนึ่งของชุมชนที่กำลังเติบโตของเรา
                        </p>
                    </div>
                    <div>
                        <DiscordButton size="xl" icon>
                            เข้าร่วม Discord ของเรา
                        </DiscordButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
