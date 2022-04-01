<script setup lang="ts">

import useUser from '~~/composables/useUser'

const { $firebaseAuth } = useNuxtApp()

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
    <button @click="signOut()">
      Sign out
    </button>
  </div>
  <div v-else>
    <div>This is a protected screen. You need to sign in.</div>
  </div>
</template>
