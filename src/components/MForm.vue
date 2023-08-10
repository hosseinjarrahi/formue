<template>
  <FormOperator :fields="fields" :form="modelValue" @updateField="updateField">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </FormOperator>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import filler from '@/helpers/filler'
import FormOperator from './form/FormOperator.vue'

const props = defineProps({
  modelValue: { default: () => {} },
  formData: { default: false },
  fields: { default: () => [] },
  autoGenerate: { default: () => true }
})

const emit = defineEmits(['callParentChanged', 'update:modelValue'])

const { updateField } = filler({
  props,
  emit
})
</script>
