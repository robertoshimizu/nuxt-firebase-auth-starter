<script setup lang="ts">
const { $firebaseAuth } = useNuxtApp();
const { data } = await useLazyAsyncData<{ message: string }>('protected', () =>
  $fetch('/api/protected')
);
const router = useRouter();

const signOut = async () => {
  await $firebaseAuth.signOut();
  router.push('/');
};
</script>

<template>
  <div>
    <div>{{ data ? data.message : 'Fetching...' }}</div>
    <button @click="signOut">Sign out</button>
  </div>
</template>
