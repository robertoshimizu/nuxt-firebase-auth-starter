
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
  }
  try {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    auth.languageCode = 'pt_BR'

    return {
      provide: {
        firebaseApp: app,
        firebaseAuth: auth,
      },
    }
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Firebase failed to be initialized: ${error}`)
  }
})
