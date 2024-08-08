'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import dayjs from 'dayjs';
import { Eye, Plus, Search, UserRoundPlus } from 'lucide-react';
import Link from 'next/link';
import { ChangeEvent, Fragment, useState } from 'react';
import 'dayjs/locale/th';
import { add } from '@/actions/discord/guild-member';
import { MemberElement, MemberMember } from '@/actions/discord/members';
import { toast } from '@/components/ui/use-toast';
import { env } from '@/env';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function Panel({ members }: { members: MemberElement[] }) {
    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredMembers, setFilteredMembers] = useState<MemberElement[]>(
        members.filter(({ member }) => !member.roles.includes(env.NEXT_PUBLIC_MEMBER_ROLE_ID)),
    );
    const [page, setPage] = useState<number>(1);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const filterUsers = (term: string) => {
        const filtered = members.filter(
            ({ member }) =>
                member.nick?.toLowerCase().includes(term.toLowerCase()) ||
                member.user.global_name?.toLowerCase().includes(term.toLowerCase()) ||
                member.user.username?.toLowerCase().includes(term.toLowerCase()) ||
                member.user.id?.toLowerCase().includes(term.toLowerCase()),
        );
        setFilteredMembers(filtered);
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        filterUsers(e.target.value);
    };

    const handleCreate = async (member: MemberMember) => {
        setSubmitted(true);

        try {
            const { success, message } = await add(member);
            toast({
                title: success ? 'สมัครสมาชิกสําเร็จ' : 'สมัครสมาชิกไม่สําเร็จ',
                description: message,
                variant: success ? 'default' : 'destructive',
            });
            router.push('/admin/users');
        } catch (error) {
            console.error(error);
            toast({
                title: 'เกิดข้อผิดพลาด',
                description: 'ไม่สามารถสมัครสมาชิกได้',
                variant: 'destructive',
            });
        } finally {
            setSubmitted(false);
        }
    };

    const discordAvatar = (member: MemberMember) => {
        if (member.user.avatar) {
            return `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.webp`;
        } else {
            return `https://cdn.discordapp.com/embed/avatars/${parseInt(member.user.discriminator) % 5}.png`;
        }
    };

    return (
        <Fragment>
            <div className="flex items-center justify-between">
                <h3>สมาชิกจำนวน {filteredMembers.length}</h3>
                <div className="flex items-center gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-2.5 top-[50%] translate-y-[-50%] size-4 muted" />
                        <Input
                            type="search"
                            placeholder="ค้นหาผู้ใช้..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full rounded-lg pl-8"
                        />
                    </div>
                    <Link href="/admin/users/add">
                        <Button>
                            <Plus className="mr-2 size-4" />
                            เพิ่มผู้ใช้
                        </Button>
                    </Link>
                </div>
            </div>
            <Card>
                <CardContent className="pt-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Discord ID</TableHead>
                                <TableHead>Member Since</TableHead>
                                <TableHead className="justify-end flex">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredMembers.slice((page - 1) * 10, page * 10).map(({ member }) => (
                                <TableRow key={member.user.id}>
                                    <TableCell className="flex items-center gap-2">
                                        <Image
                                            src={discordAvatar(member)}
                                            alt={member.user.username}
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                        />
                                        <div className="flex flex-col">
                                            <p>{member.nick || member.user.global_name || member.user.username}</p>
                                            <p className="text-sm text-muted-foreground -mt-2">
                                                {member.user.username}
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell>{member.user.id}</TableCell>
                                    <TableCell>{dayjs(member.joined_at).locale('th').format('DD MMMM YYYY')}</TableCell>
                                    <TableCell className="justify-end flex">
                                        <div className="flex items-center">
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Link
                                                            href={`https://discord.com/users/${member.user.id}`}
                                                            target="_blank"
                                                        >
                                                            <Button variant="ghost" size="icon">
                                                                <Eye className="size-4" />
                                                                <span className="sr-only">View</span>
                                                            </Button>
                                                        </Link>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>ดูโปรไฟล์ Discord</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => handleCreate(member)}
                                                            disabled={submitted}
                                                        >
                                                            <UserRoundPlus className="size-4" />
                                                            <span className="sr-only">Add</span>
                                                        </Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>เพิ่มผู้ใช้ในฐานข้อมูลของสมาชิกกิลด์</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <p className="text-sm text-muted-foreground text-nowrap">
                        หน้าที่ ({page}/{Math.ceil(filteredMembers.length / 10)})
                    </p>
                    <div className="flex justify-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => setPage((prev) => prev - 1)}
                            disabled={page === 1}
                        >
                            หน้าก่อนหน้า
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => setPage((prev) => prev + 1)}
                            disabled={filteredMembers.length < 10 || page === Math.ceil(filteredMembers.length / 10)}
                        >
                            หน้าถัดไป
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </Fragment>
    );
}
