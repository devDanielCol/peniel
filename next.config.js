/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
    NEXT_PUBLIC_FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
    API_KEY: process.env.API_KEY,
    LOCAL_STORAGE_ENCRYPT_KEY: process.env.LOCAL_STORAGE_ENCRYPT_KEY,
  },
  images: {
    formats: ["image/webp"],
    domains: ["flagcdn.com", "upload.wikimedia.org", "cdn.pixabay.com"],
  },
};

module.exports = nextConfig;
