module.exports = {
    env: {
        API_URL: 'http://10.50.13.2.8081',
        // API_URL: 'https://uatchs2.ewmgroup.com/chs2
    }
}

module.exports = {
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
}

// module.exports = {
//     webpack: (config, { isServer }) => {
//         if(!isServer) {
//             config.node = {
//                 fs: 'empty'
//             }
//         }
//         return config
//     }
// }