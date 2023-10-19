// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site:{
    url:"sew-counseling.com"
  },
  devtools: { enabled: true },
  css: [
    "primevue/resources/primevue.css",
    "primevue/resources/themes/saga-blue/theme.css",
    "primeicons/primeicons.css",
    "@sfxcode/formkit-primevue/dist/sass/formkit-prime-inputs.scss",
    "@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss",
    "~/assets/styles/main.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@formkit/nuxt", "@sfxcode/nuxt-primevue","nuxt-simple-sitemap"],
  primevue: {
    config: {
      ripple: true,
    },
  },
  build: {
    transpile: ["primevue"],
  }
});
