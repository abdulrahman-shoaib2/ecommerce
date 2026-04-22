import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	async redirects() {
		return [ // return array and every object in this array is redirect object
			{
				source: "/home", 
				destination: '/',
				permanent: true, 
			}
		]
	},
  images: {
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/*/**',
      },
    ]
  },  
};

export default nextConfig;
