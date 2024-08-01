'use client';

import { send } from '@/actions/contact';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string({ message: 'กรุณากรอกชื่อ' }).min(5, 'กรุณากรอกชื่อของคุณ'),
    email: z.string({ message: 'กรุณากรอกอีเมล' }).email({ message: 'อีเมลไม่ถูกต้อง' }),
    subject: z.string({ message: 'กรุณากรอกหัวข้อ' }),
    message: z
        .string({ message: 'กรุณากรอกข้อความ' })
        .min(10, 'กรุณากรอกข้อความอย่างน้อย 10 ตัวอักษร')
        .max(1000, 'กรุณากรอกข้อความอย่างไม่เกิน 1000 ตัวอักษร'),
});

export function ContactForm() {
    const [verify, setVerify] = useState<boolean>(false);
    const captchaRef = useRef<HCaptcha>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
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
        <section className="py-16 container">
            <div className="max-w-4xl mx-auto">
                <h2>ส่งข้อความถึงเรา</h2>
                <p>
                    มีคำถามหรือต้องการความช่วยเหลือ? ใช้แบบฟอร์มด้านล่างเพื่อส่งข้อความถึงเรา
                    แล้วเราจะติดต่อกลับโดยเร็วที่สุด
                </p>
                <Form {...form}>
                    <form className="mt-6" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        </div>
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>หัวข้อ</FormLabel>
                                    <FormControl>
                                        <Input placeholder="หัวข้อของคุณ" {...field} />
                                    </FormControl>
                                    <FormDescription>หัวข้อของคุณเพื่อการติดต่อ</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ข้อความ</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="ข้อความของคุณ" rows={4} {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        ข้อความที่คุณต้องการส่ง ขั้นต่ํา 10 ตัวอักษร และไม่เกิน 1000 ตัวอักษร
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col gap-3 items-end mt-8">
                            <Button type="submit" disabled={form.formState.isSubmitting || !verify}>
                                ส่งข้อความ
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
