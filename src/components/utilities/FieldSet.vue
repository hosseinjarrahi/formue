<template>
  <fieldset class="rounded-lg border-1 w-full p-3 mb-4 border border-5 border-black">
    <legend class="px-2">{{ label }}</legend>
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  name: 'FieldSet',

  props: ['label']
}
</script>