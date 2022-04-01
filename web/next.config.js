/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['news.fordham.edu'],
  },
  api: {
    externalResolver: true,
  },
  async headers(){
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,PUT,POST,DELETE,PATCH,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'append,delete,entries,foreach,get,has,keys,set,values,Authorization'}
        ]
      }
    ]
  }
}

module.exports = nextConfig
