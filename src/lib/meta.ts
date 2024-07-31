import { BASE_URL } from '@/constants';
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';

type CommonMetaData = {
    title: string | TemplateString;
    description: string;
};

export function commonMetaData({ title, description }: CommonMetaData) {
    return {
        title,
        description,
        authors: [{ name: 'Juniper Nexus', url: BASE_URL }],
        metadataBase: new URL(BASE_URL),
        openGraph: {
            title,
            description,
            url: BASE_URL,
            images: [
                {
                    url: `${BASE_URL}/og.png`,
                    width: 800,
                    height: 400,
                },
            ],
        },
    } as Metadata;
}
