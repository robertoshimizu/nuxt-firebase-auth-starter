<script setup lang="ts">
const token: String = useIDTokenChange()

</script>

<template>
  <div>
    Token: {{ token }}
    <slot />
  </div>
</template>
