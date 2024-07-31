/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev-media.konfhub.com',
            },
            {
                protocol: 'https',
                hostname: 'dev.konfhub.com',
            },
        ],
    },
};

export default nextConfig;
