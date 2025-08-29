// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  experimental: {
    asyncContext: true
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,

  nitro: {
    preset: 'vercel',
  },

  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
    public: {
      NITRO_HOST: process.env.NITRO_HOST || '127.0.0.1', // Giá trị từ .env
      NITRO_PORT: process.env.NITRO_PORT || '3000',
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-splide',
  ],
  splide: {
    theme: 'default'
  },
  imports: {
    dirs: [
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
      'composables/**'
    ]
  },
  image: {
    quality: 80,
    format: ['webp'],
    dir: 'assets/images'
  }
})