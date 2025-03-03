// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap',
        },
        {
          rel: 'stylesheet',
          type: 'image/png',
          sizes: '32x32',
          href: '@/assets/shuffle-for-tailwind.png',
        },
      ]
    },
  },
  devServer: {
    port: 3011,
  }
})