'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { User } from '@prisma/client';
import { Eye, Plus, Search, Trash } from 'lucide-react';
import Link from 'next/link';
import { ChangeEvent, Fragment, useState } from 'react';

export function Panel({ users }: { users: User[] }) {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
    const [page, setPage] = useState<number>(1);

    const filterUsers = (term: string) => {
        const filtered = users.filter(
            (user) =>
                user.username.toLowerCase().includes(term.toLowerCase()) ||
                user.user_id.toLowerCase().includes(term.toLowerCase()),
        );
        setFilteredUsers(filtered);
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        filterUsers(e.target.value);
    };

    return (
        <Fragment>
            <div className="flex items-center justify-between">
                <h3>การจัดการผู้ใช้</h3>
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
                                <TableHead>User ID</TableHead>
                                <TableHead>Discord ID</TableHead>
                                <TableHead>Username</TableHead>
                                <TableHead className="justify-end flex">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredUsers.slice((page - 1) * 10, page * 10).map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.user_id}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell className="justify-end flex">
                                        <div className="flex items-center">
                                            <Link href={`https://discord.com/users/${user.user_id}`} target="_blank">
                                                <Button variant="ghost" size="icon">
                                                    <Eye className="size-4" />
                                                    <span className="sr-only">View</span>
                                                </Button>
                                            </Link>
                                            <Link href={`/admin/users/delete/${user.id}`}>
                                                <Button variant="ghost" size="icon">
                                                    <Trash className="size-4" />
                                                    <span className="sr-only">Delete</span>
                                                </Button>
                                            </Link>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <div className="flex justify-end gap-2">
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
                            disabled={filteredUsers.length < 10 || page === Math.ceil(filteredUsers.length / 10)}
                        >
                            หน้าถัดไป
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </Fragment>
    );
}
