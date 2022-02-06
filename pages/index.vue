<script setup lang="ts">
import { signInWithEmailAndPassword } from 'firebase/auth';

const { $firebaseAuth } = useNuxtApp();
const router = useRouter();
const email = ref('');
const password = ref('');
const disabled = ref(false);

const signIn = async () => {
  disabled.value = true;
  try {
    await signInWithEmailAndPassword(
      $firebaseAuth,
      email.value,
      password.value
    );
    router.push('/private');
  } catch (e) {
    alert(e.code);
  }
  disabled.value = false;
};
</script>

<template>
  <div>
    <input type="email" placeholder="email" v-model="email" /> <br />
    <input type="password" placeholder="password" v-model="password" /> <br />
    <button @click="signIn" :disabled="disabled">
      {{ disabled ? 'Please wait...' : 'Sign in' }}
    </button>
  </div>
</template>
