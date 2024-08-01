'use client';

import {
    Breadcrumb as BreadcrumbComponent,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { normalize } from '@/utils/normalize';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export function Breadcrumb({ className }: { className?: string }) {
    const pathname = usePathname();

    const getPathComponents = (path: string) => path.split('/').filter((x) => x);
    const getCurrentPath = (pathComponents: string[]) => pathComponents[pathComponents.length - 1];
    const getPathArray = (pathComponents: string[]) => pathComponents.slice(0, pathComponents.length - 1);

    const pathComponents = getPathComponents(pathname);
    const currentPath = getCurrentPath(pathComponents);
    const pathArray = getPathArray(pathComponents);

    return (
        <BreadcrumbComponent className={className}>
            <BreadcrumbList className="list-none m-0">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {pathArray.map((path, index) => (
                    <Fragment key={path}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/${index === 0 ? path : pathArray.join('/')}`}>
                                {normalize(path)}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </Fragment>
                ))}
                <BreadcrumbItem>
                    <BreadcrumbPage>{normalize(currentPath)}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </BreadcrumbComponent>
    );
}
