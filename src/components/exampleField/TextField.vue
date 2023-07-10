<template>
  {{ getFromSchema('title') }}
  <input
    class="border-2 border-indigo-600 rounded w-full"
    :value="value"
    @input="(event) => updateField(event.target.value)"
  />
  <span class="text-red-900" v-if="error">
    {{ error }}
  </span>
</template>

<script setup>
import { defineProps } from 'vue'
import useFieldProps from '../../composables/useFieldProps'

const props = defineProps(useFieldProps)

watch(props.value, () => {
  console.log(value)
})
</script>
