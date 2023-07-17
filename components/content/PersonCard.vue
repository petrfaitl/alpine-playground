<script lang="ts" setup>

  const props = defineProps({
    email:{
      type: String,
          default:''
    },
    instagram:{
      type: String,
      default:''
    },
    facebook:{
      type: String,
      default:''
    },
    image:{
      type: String,
      default:''
    }
  })
</script>

<template>
  <div class="card">
    <div class="photo">
      <NuxtImg :src="image" />
    </div>
    <div>
      <h3 class="name">
        <ContentSlot :use="$slots.name" unwrap="p">
          Person's Name
        </ContentSlot>
      </h3>
      <p class="title">
        <ContentSlot :use="$slots.title" unwrap="p">
          Title
        </ContentSlot>
      </p>
      <div class="contacts">
        <NuxtLink :to="`https://www.instagram.com/${instagram}`" target="_blank">
          <Icon v-if="instagram" name="ion:logo-instagram" />
        </NuxtLink>
        <NuxtLink :to="`https://www.facebook.com/${facebook}`" target="_blank">
          <Icon v-if="facebook" name="ion:logo-facebook" />
        </NuxtLink>
        <NuxtLink :to="`mailto://${email}`">
          <Icon v-if="email" name="ion:paper-airplane" target="_blank"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="ts">
css

(
{
'.card'
:
{
  display: 'block',
  position: 'relative',
  width: '100%',
  padding: '{space.8}',
  borderRadius: '{radii.xl}',
  border: '1px solid {elements.border.primary.static}',
'&:hover':{
    border: '1px solid {elements.border.primary.hover}',
    transition: 'all 0.5s ease-out'
},
  background: '{elements.backdrop.background}',
  backdropFilter: '{elements.backdrop.filter}',
'.photo img': {
  marginBottom: '{space.3}',
  borderRadius: '{radii.md}',
},
'.icon'
:
{
  color: '{prose.a.color.static}',
  display: 'inline-block',
  marginBottom: '{space.2}',
  width: '{space.5}',
  height: '{space.5}'
},
'.icon:hover':{
  color:'{prose.a.color.hover}'
},
'.contacts'
:
{
  display: 'flex',
  gap: '{space.2}',

}
,
'.name'
:
{
  marginBottom:'{space.1}',
  fontSize: '{text.lg.fontSize}',
  lineHeight: '{text.lg.lineHeight}',
  fontWeight: '{fontWeight.semibold}',
  color: '{elements.text.primary.color.static}'
}
,
'.title'
:
{
  fontSize: '{text.sm.fontSize}',
  lineHeight: '{text.sm.lineHeight}',
  fontWeight: '{fontWeight.medium}',
  color: '{elements.text.secondary.color.static}',
  marginBottom:'{space.4}',
}
}
}
)
</style>
