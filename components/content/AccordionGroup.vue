<script lang="ts" setup>
  defineProps({
    title:{
      type:String,
      default:'FAQs'
    }
  })
  // const slots = useSlots();

  const localePath = useLocalePath();

  // Query partial content
  //TODO
   const { data } = queryContent(localePath('/_documents/')).where({ _partial: true}).find();

  console.log(data);

</script>

<template>
  <div class="accordion-group">
    <h2 class="title">
      <ContentSlot :use="$slots.title" unwrap="p">
        {{ title }}
      </ContentSlot>
    </h2>

    <ContentSlot :use="$slots.default">
      Default text
    </ContentSlot>
  </div>
</template>

<style scoped lang="ts">

css({
  '.title': {
    marginBottom: '{space.8}',
    fontSize: '{text.3xl.fontSize}',
    lineHeight: '{text.3xl.lineHeight}',
    fontWeight: '{fontWeight.bold}',
    letterSpacing: '{letterSpacing.tight}',
    color: '{elements.text.primary.color.static}',
      '@sm': {
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
      },
  },
'.accordion-group': {
    marginBottom: '{space.24}',
}
})
</style>
