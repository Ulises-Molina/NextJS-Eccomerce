/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.html$/,
            use: "ignore-loader",
        });
        return config;
    },
    images: {
        domains: ["fakestoreapi.com"],
    },
};

export default nextConfig;