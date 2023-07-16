<script lang="ts" setup>

  defineProps({})

  const isOpen = ref(false);


</script>

<template>
  <div :class="{active: isOpen}" class="accordion-item" @click="isOpen= !isOpen">
    <div class="topic">
      <div class="icon">
        <Icon name="ion:plus" />
      </div>
      <div>
        <ContentSlot :use="$slots.topic" unwrap="p">
          Topic
        </ContentSlot>
      </div>
    </div>
    <div class="content" v-if="isOpen">
      <ContentSlot :use="$slots.default">
        Text of Accordion
      </ContentSlot>
    </div>


  </div>
</template>

<style scoped lang="ts">
css({
  '.accordion-item':
{
  width: '{size.full}',

'.topic'
:
{
  cursor: 'pointer',
  position: 'relative',
  padding: '{space.2}',
'&:hover'
:
{
  backgroundColor: '{elements.surface.secondary.backgroundColor}',
  transition: 'all 0.5s ease-out',
}
,
'.icon'
:
{
  position: 'absolute',
  top: '0',
  bottom: '0',
  margin: 'auto 0',
  right: '{space.2}',
},
}
,
'.content'
:
{
  color: '{elements.text.secondary.color.static}',
  padding: '{space.2}',
}
},
  '.active':{
    backgroundColor: '{elements.surface.secondary.backgroundColor}',
  },
  }
)

</style>
