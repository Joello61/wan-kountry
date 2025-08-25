import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // TypeScript amélioré avec typed routes (stable en 15.5)
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: './tsconfig.json',
  },
  
  // Routes typées (fonctionnalité stable)
  typedRoutes: true,
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src', 'types'],
  },
  
  // Turbopack optimisé pour le développement
  experimental: {
    turbo: {
      // Résolution optimisée
      resolveAlias: {
        '@': './src',
        '@/components': './src/components',
        '@/lib': './src/lib',
        '@/hooks': './src/hooks',
        '@/types': './src/types',
        '@/utils': './src/utils',
      },
      // Rules personnalisées pour Turbopack
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    // Optimisations Next.js 15.5
    optimizePackageImports: ['lucide-react', 'date-fns', 'lodash-es'],
  },
  
  // Configuration d'images optimisée
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Domaines externes autorisés
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      // Ajoutez d'autres domaines selon vos besoins
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
    
    // Configuration pour Next.js 16 (préparatoire)
    qualities: [75, 85, 95, 100],
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
      {
        pathname: '/assets/**', 
        search: '**',
      },
    ],
  },
  
  // Optimisations des performances
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  
  // Headers de sécurité
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ],
  
  // Redirections et rewrites
  redirects: async () => [
    // Exemple de redirection
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
  ],
  
  // Configuration de bundling
  webpack: (config, { dev, isServer }) => {
    // Optimisations webpack pour la production
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.default = false;
      config.optimization.splitChunks.cacheGroups.vendors = false;
      config.optimization.splitChunks.cacheGroups = {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          priority: 5,
          chunks: 'all',
          reuseExistingChunk: true,
        },
      };
    }
    
    return config;
  },
  
  // Variables d'environnement publiques
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY || '',
  },
  
  // Configuration de build
  output: 'standalone', // Optimal pour Docker/conteneurs
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
  
  // Logging amélioré
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;