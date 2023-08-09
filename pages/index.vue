<template>
  <Container>
    <NuxtLayout :name="props.layout">
      <ContentNavigation v-if="locNavigation">
        <ul>
          <NuxtLink
            v-for="link of locNavigation"
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
    </NuxtLayout>
  </Container>
</template>

<script setup>
  const props = defineProps({layout: {type: String, default: 'localised'},});
  console.log(props.layout);

  definePageMeta({
    documentDriven: false,
  })
  const {locale} = useI18n();
  // const { navigation, page, surround, globals } = useContent();

  const locNavigation = await queryContent()
      .where({locale: {$eq: locale.value}})
      .find();
  // console.log(page.value);
</script>
