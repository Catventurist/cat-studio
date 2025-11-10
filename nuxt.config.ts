export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [ '@nuxt/ui', '@nuxt/content', '@nuxt/image', 'nuxt-og-image'],
  telemetry: false,
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },
  site: { 
    url: 'cat',
    name: 'CatStudio'
  }
})