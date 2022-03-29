<script setup lang="ts">
useIDTokenChange()
</script>

<template>
  <nav style="display:flex;justify-content: start;">
    <a style="align-self:center" href="/">
      <img style="height: 40px;" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo">
    </a>
    <ul style="list-style-type: none;flex:1;display:flex;align-items: flex-start;justify-content: flex-start;">
      <li>
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">
          Login
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/signup">
          SignUp
        </NuxtLink>
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
