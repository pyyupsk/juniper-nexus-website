/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placeholder.com',
            },
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
            {
                protocol: 'https',
                hostname: 'lienquan.garena.vn',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
            },
        ],
    },
};

export default nextConfig;
