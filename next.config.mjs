/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*",
  //       has: [
  //         {
  //           type: "host",
  //           value: "makecomponents.com",
  //         },
  //       ],
  //       destination: "https://makecomponents.com/:path*",
  //       permanent: true,
  //     },
  //   ];
  // },
};
//  module.exports = nextConfig

// module.exports =  {
//   async redirects() {
//     return [
//       {
//         source: '/:path*',
//         has: [
//           {
//             type: 'host',
//             value: 'makecomponents.com',
//           },
//         ],
//         destination: 'https://makecomponents.com/:path*',
//         permanent: true,
//       },
//     ];
//   },
// };

export default nextConfig;
