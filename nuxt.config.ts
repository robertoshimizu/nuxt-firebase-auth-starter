import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
  },
  head: {
    title: 'Nuxt3 Firebase Starter', // Other meta information
    script: [
      { hid: 'firebaseUI', src: 'https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth__{pt-BR}.js', defer: true },
    ],
  },
})
