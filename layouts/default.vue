<script setup lang="ts">
import { Unsubscribe } from 'firebase/auth';
import formatUser from '~/helpers/format-user';

const { $firebaseAuth } = useNuxtApp();
const token = useCookie('token', {
  path: '/',
});

const firebaseUser = useUser();

let unsubscribe: Unsubscribe;

onMounted(() => {
  unsubscribe = $firebaseAuth.onIdTokenChanged(async (user) => {
    if (user) {
      token.value = await user.getIdToken();
      firebaseUser.value = formatUser(user);
    } else {
      token.value = null;
      firebaseUser.value = null;
    }
  });
});

onUnmounted(() => {
  unsubscribe?.();
});
</script>

<template>
  <div>
    <slot />
  </div>
</template>
