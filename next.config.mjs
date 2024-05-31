/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.makecomponents.com" }],
        destination: "http://makecomponents.com/:path*",
        permanent: false,
      },
    ];
  },
  output: "export",
};
/* module.exports = nextConfig*/
export default nextConfig;
