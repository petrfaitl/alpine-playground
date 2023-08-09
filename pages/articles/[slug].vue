<template>
  <ContentDoc :path="$route.path" />
</template>

<script setup>
  definePageMeta({
    documentDriven: false
  })

</script>
