/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // This allows photos from this domain
    images: {
        domains: ['links.papareact.com']
    }
}

module.exports = nextConfig
