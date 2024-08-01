'use client';

import { send } from '@/actions/contact';
import { Fade } from '@/components/gradients/fade';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string({ message: 'กรุณากรอกชื่อ' }).min(5, 'กรุณากรอกชื่อของคุณ'),
    email: z.string({ message: 'กรุณากรอกอีเมล' }).email({ message: 'อีเมลไม่ถูกต้อง' }),
    feedback: z
        .string({ message: 'กรุณากรอกข้อความ' })
        .min(10, 'กรุณากรอกข้อความอย่างน้อย 10 ตัวอักษร')
        .max(1000, 'กรุณากรอกข้อความอย่างไม่เกิน 1000 ตัวอักษร'),
});

export function FeedbackForm() {
    const [verify, setVerify] = useState<boolean>(false);
    const captchaRef = useRef<HCaptcha>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            feedback: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const { success, message } = await send(values);
            toast({
                title: success ? 'ส่งข้อความสําเร็จ' : 'ส่งข้อความไม่สําเร็จ',
                description: message,
                variant: success ? 'default' : 'destructive',
            });
        } catch (error) {
            toast({
                title: 'เกิดข้อผิดพลาด',
                description: 'ไม่สามารถส่งข้อความได้',
                variant: 'destructive',
            });
            console.error(error);
        } finally {
            form.reset();
            captchaRef.current?.resetCaptcha();
            setVerify(false);
        }
    }

    return (
        <section className="py-16 relative">
            <div className="absolute inset-0">
                <Image
                    src="https://lienquan.garena.vn/wp-content/uploads/2024/05/001dbf5c41b23b35b4142dcd51e15db66594e429c0ce31.jpg"
                    alt="Garena RoV Background"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover opacity-50"
                />
                <Fade via="transparent" to="background" />
            </div>
            <div className="max-w-4xl container relative">
                <h2 className="text-center">คำติชมและข้อเสนอแนะ</h2>
                <p className="text-center leading">
                    เราให้ความสำคัญกับความคิดเห็นของคุณ! แบ่งปันความคิดและข้อเสนอแนะของคุณเพื่อช่วยให้เราปรับปรุงชุมชน
                    Juniper Nexus
                </p>
                <Form {...form}>
                    <form
                        className="bg-card text-card-foreground border shadow-lg rounded-lg p-6 mt-6"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <input
                            type="hidden"
                            name="subject"
                            value="การส่งใหม่จากแบบฟอร์มคำติชมและข้อเสนอแนะ Juniper Nexus"
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ชื่อ-สกุล</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ชื่อ-สกุลของคุณ" {...field} />
                                    </FormControl>
                                    <FormDescription>ชื่อ และ สกุล ของคุณเพื่อการติดต่อ</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="อีเมลของคุณ" {...field} />
                                    </FormControl>
                                    <FormDescription>อีเมลของคุณเพื่อการติดต่อ</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="feedback"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ข้อเสนอแนะ</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="ข้อเสนอแนะของคุณ" rows={4} {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        ข้อเสนอแนะที่คุณต้องการส่ง ขั้นต่ํา 10 ตัวอักษร และไม่เกิน 1000 ตัวอักษร
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col gap-3 items-center mt-8">
                            <Button type="submit" disabled={form.formState.isSubmitting || !verify}>
                                ส่งข้อเสนอแนะ
                            </Button>
                            <HCaptcha
                                ref={captchaRef}
                                theme="dark"
                                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                reCaptchaCompat={false}
                                onVerify={() => setVerify(true)}
                            />
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
}
