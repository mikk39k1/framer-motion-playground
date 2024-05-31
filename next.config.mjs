/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'intellioptima.eu-central-1.linodeobjects.com'
            }
        ]
    }
};

export default nextConfig;
