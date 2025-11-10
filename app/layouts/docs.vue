<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation highlight :navigation="navigation" class="-ms-4" />
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
