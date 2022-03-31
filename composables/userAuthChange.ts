import { onAuthStateChanged } from 'firebase/auth'
import useUser from '~~/composables/useUser'

export default function(): void {
  const { $firebaseAuth } = useNuxtApp()

  onMounted(() => {
    onAuthStateChanged($firebaseAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        useUser().value = user
      }
      else {
        // User is signed out
        // ...
        useUser().value = null
      }
    })
  })
}
