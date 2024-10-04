/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "5.imimg.com",
            },
            {
                protocol: "https",
                hostname: "live.staticflickr.com",
            },
        ]
    }
};

export default nextConfig;
