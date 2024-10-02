/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "5.imimg.com",
            },
        ]
    }
};

export default nextConfig;
