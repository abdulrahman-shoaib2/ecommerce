import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	async redirects() {
		return [ // return array and every object in this array is redirect object
			{
				source: "/home", 
				destination: '/',
				permanent: true, 
			},
			{
				source: "/register", 
				destination: '/auth/register',
				permanent: true, 
			},
			{
				source: "/signup", 
				destination: '/auth/register',
				permanent: true, 
			},
			{
				source: "/login", 
				destination: '/auth/login',
				permanent: true, 
			},
			{
				source: '/signin', 
				destination: '/auth/login',
				permanent: true, 
			},
		]
	},
  images: {
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'dummyjson.com',
        pathname: '/image/*/*/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        pathname: '/product-images/*/*/**',
      },
    ]
  },  
};
// "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"

export default nextConfig;
