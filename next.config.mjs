/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export the handler function for use in your application
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.sanity.io",
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
