<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    useMeta({
      title: 'Nuxt3 Firebase Starter',
      htmlAttrs: {
        lang: 'pt_BR',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac mauris a tortor aliquam luctus. Donec vel rhoncus nisl. Vivamus tincidunt, quam ut vulputate venenatis, mauris dui aliquam sapien, ac dapibus neque sapien vitae metus.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'assets/img/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: 'assets/img/apple-icon-180x180.png' },
        { rel: 'icon', sizes: '32x32', href: 'assets/img/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', href: 'assets/img/favicon-16x16.png' },
      ],
      script: [
        {
        },
      ],
    })
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
