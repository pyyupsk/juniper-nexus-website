/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                pathname: '/widget-avatars/**',
            },
            {
                protocol: 'https',
                hostname: 'qpmtvzspevuvztptbwwr.supabase.co',
                pathname: '/storage/v1/object/public/game%20profiles/**',
            },
        ],
    },
};

export default nextConfig;
