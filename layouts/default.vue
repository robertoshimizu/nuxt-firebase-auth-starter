<script setup lang="ts">
import userAuthChange from '../composables/userAuthChange'

userAuthChange()

</script>

<template>
  <nav style="display:flex;justify-content: start;">
    <a style="align-self:center" href="/">
      <img style="height: 40px;" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo">
    </a>
    <ul style="list-style-type: none;flex:1;display:flex;align-items: flex-start;justify-content: flex-start;">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/signup">Signup</a>
      </li>
    </ul>
  </nav>

  <div>
    <slot />
  </div>

  <footer>Footer</footer>
</template>
<style>
a:link {
  text-decoration: none;
}
li{
margin-left: 82px;
}
</style>
