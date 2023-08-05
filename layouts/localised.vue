<script setup lang="ts">
  const { locale, locales } = useI18n();
  const localeSettings = useI18n();
  const switchLocalePath = useSwitchLocalePath();

  const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
  })
</script>

<template>
  <main>
    <p>Localised layout</p>
    {{localeSettings}}<br>
    {{availableLocales}}
    <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)">
      {{loc.name}}</NuxtLink>
    <slot />
  </main>
</template>


<style scoped lang="ts">

</style>
