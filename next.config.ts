import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export', // Genera fitxers estàtics
    basePath: isProd ? '/smap-sdk-docs' : '',// El nom del repo a GitHub
    images: {
        unoptimized: true, // GitHub Pages no suporta l'optimització nativa
    },
};

export default nextConfig;