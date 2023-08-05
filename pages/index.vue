<template>
  <ContentNavigation>
    <ul>
    <NuxtLink
      v-for="link of navigation[1].children"
      :key="link._path"
      :to="link._path"
    >
      <li>
      {{ link.title }}
      </li>
    </NuxtLink>
    </ul>
  </ContentNavigation>
  <ContentDoc />
</template>

<script setup>
  const { locale } = useI18n();
  const { navigation, page, surround, globals } = useContent();

  const locNavigation = await queryContent().locale(locale.value).find();
  console.log(navigation);
</script>
