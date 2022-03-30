<script setup lang="ts">
import { signInWithEmailAndPassword } from 'firebase/auth'

const { $firebaseAuth } = useNuxtApp()
const router = useRouter()
const email = ref('')
const password = ref('')
const disabled = ref(false)

const signIn = async() => {
  disabled.value = true
  try {
    await signInWithEmailAndPassword(
      $firebaseAuth,
      email.value,
      password.value,
    )
    router.push('/private')
  }
  catch (e) {
    alert(e.code)
  }
  disabled.value = false
}
</script>

<template>
  <div>
    <form @submit.prevent="signIn">
      <input v-model="email" type="email" placeholder="email"> <br>
      <input v-model="password" type="password" placeholder="password"> <br>
      <button type="submit" :disabled="disabled">
        {{ disabled ? 'Please wait...' : 'Sign in' }}
      </button>
    </form>
  </div>
</template>
