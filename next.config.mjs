/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about/gallery-frame-aboutus",
        has: [{ type: "host", value: "makecomponents.com" }],
        destination: "https://www.makecomponents.com/:path*",
        permanent: true,
      },
    ]
  },
    output:'export',
  };
  /* module.exports = nextConfig*/
  export default nextConfig;
  