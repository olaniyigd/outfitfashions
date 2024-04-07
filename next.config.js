/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [   
        "http://127.0.0.1:3000",     
      ],
    },
    env: {
      KEY: "3076",
      IV: "c856",
      BASE_URL: "http://127.0.0.1:3000",
      SECRET_KEY : "3056"
    },
  };
  
  module.exports = nextConfig;
  
