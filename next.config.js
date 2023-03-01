
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'server.ideatofit.com',
        port:''
      }
    ]
  }
}

module.exports = nextConfig
