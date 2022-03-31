<script setup lang="ts">

import useUser from '~~/composables/useUser'

const { $firebaseAuth } = useNuxtApp()
const data = { message: 'This is a protected content. You cannot access it without sign in.' }

const router = useRouter()
const user = useUser()

async function signOut() {
  await $firebaseAuth.signOut()
  router.push({ name: 'index' })
}
</script>

<template>
  <div v-if="user">
    <div>Welcome, {{ user.email }}</div>
    <div>{{ data ? data.message : 'Fetching...' }}</div>
    <button @click="signOut()">
      Sign out
    </button>
  </div>
  <div v-else>
    <div>{{ data.message }}</div>
  </div>
</template>
