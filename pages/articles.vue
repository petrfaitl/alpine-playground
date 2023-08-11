<script setup lang="ts">

</script>

<template>
  <ContentDoc :path="$route.path">
    <template #not-found>
      <DocumentDrivenNotFound />
    </template>
  </ContentDoc>
</template>

<style scoped lang="ts">


</style>
