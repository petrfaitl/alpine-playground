<script lang="ts" setup>

  const props = defineProps({
    open: {
      type: Boolean,
      default: false,
    },
  })
  const emit = defineEmits(['update:toggleOpen']);

  const slots = useSlots();



  const isOpen = ref(props.open);


</script>

<template>
  <div :class="{active: isOpen}" :expanded="{isOpen}" :aria-data-open="isOpen" class="accordion-item" @click="isOpen= !isOpen">
    <div class="topic" >
      <div class="icon">
        <Icon name="ion:plus" />
      </div>
      <div>
        <ContentSlot :use="$slots.topic" unwrap="p">
          Topic
        </ContentSlot>
      </div>
    </div>

    <div class="content" :class="{collapsed: !isOpen}">
      <ContentSlot :use="$slots.content" unwrap="p" :open="isOpen">
        Text of Accordion
      </ContentSlot>
    </div>
  </div>
</template>

<style scoped lang="ts">

css
(
{
    '.accordion-item': {
        width: '{size.full}',

        '.topic': {
            cursor: 'pointer',
            position: 'relative',
            padding: '{space.4}',
            paddingLeft: '{space.16}',
            '&:hover, &.active': {
                backgroundColor: '{elements.surface.secondary.backgroundColor}',
                transition: 'all 0.5s ease-out',
            },
            '.icon': {
                position: 'absolute',
                top: '0',
                bottom: '0',
                margin: 'auto 0',
                left: '{space.2}',
                '& svg': {

                    transition: 'transform 0.5s ease',
                }
            },
        },
        '.content': {
            color: '{elements.text.secondary.color.static}',
            backgroundColor: '{elements.surface.secondary.backgroundColor}',
            padding: '{space.4}',
            paddingLeft: '{space.16}',
            transition: 'all 500ms ease-out',
            'maxHeight': '500px',

            '&.collapsed': {
                'maxHeight': '0px',
                overflow: 'hidden',
                paddingTop: '{space.0}',
                paddingBottom: '{space.0}',
            },
        }
    },
    '.active': {
        backgroundColor: '{elements.surface.secondary.backgroundColor}',
        '&.accordion-item .content': {

        },
        '& .icon svg': {
            transform: 'rotate(45deg)',
            transition: 'transform 0.5s ease',
        },

    },
}
)





</style>
