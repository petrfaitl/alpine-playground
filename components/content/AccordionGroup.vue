<script lang="ts" setup>
  defineProps({
    title:{
      type:String,
      default:'FAQs'
    }
  })
  const slots = useSlots();

  const children = slots?.default?.();
  // console.log(children);


// const slotContent = slots?.default?.();
//   console.log(slotContent);
//
//   const slotRef = ref();
//   watch(slotRef,(newVal)=>{
//     console.log('NewVal: ',newVal)
//     console.log('SlotRef: ',slotRef);
//
//   });
//
//   const accordionState = slotContent.map((slot,idx)=>{
//     return {'open': slot.props.open};
//   })
//
//   console.log(accordionState);

</script>

<template>
  <div class="accordion-group">
    <h2 class="title">
      <ContentSlot :use="$slots.title" unwrap="p" ref="slotRef">
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
