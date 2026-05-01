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
				source: "/signup", 
				destination: '/register',
				permanent: true, 
			},
			{
				source: '/signin', 
				destination: '/login',
				permanent: true, 
			},
			{
				source: '/allorders',  // test protection
				destination: '/orders',
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
