<script setup lang="ts">
  const { locale, locales } = useI18n();
  const localeSettings = useI18n();
  const switchLocalePath = useSwitchLocalePath();

  const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
  })
  console.log(availableLocales)
</script>

<template>
  <main>

    <div class="lang-switcher">
      <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)">
        {{loc.name}}</NuxtLink>
    </div>
    <slot />
  </main>
</template>


<style scoped>
.lang-switcher {
  margin-bottom: $dt('space.4');
}

</style>
