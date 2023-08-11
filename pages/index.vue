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
      <ContentDoc>
        <template #not-found>
          <DocumentDrivenNotFound />
        </template>
      </ContentDoc>
    </NuxtLayout>
  </Container>
</template>

<script setup>
  const props = defineProps({layout: {type: String, default: 'localised'},});

  definePageMeta({
    documentDriven: false,
  })
  const {locale} = useI18n();

  // Obtains locale, when none specified in path then fallback locale
  const localePath = useLocalePath();

  // Queries all pages in given locale for nav bar
  const locNavigation = await queryContent()
      .where({locale: {$eq: locale.value}})
      .find();
</script>
