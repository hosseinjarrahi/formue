<template>
  {{ form }}
  <MForm :fields="fields" v-model="form" :form-data="formData" />
</template>

<script setup>
/* eslint-disable no-unused-vars */

import TextField from './components/exampleField/TextField.vue'
import { registerFields } from './helpers/fieldsStore'
import MForm from './components/MForm.vue'
import { ref, markRaw, watch, nextTick } from 'vue'

registerFields({
  text: TextField
})

const form = ref({})
const formData = ref({})

const fields = ref([
  {
    title: 'field1',
    field: 'field1',
    isHeader: true,
    groupAttr: { class: 'w-[32.5%]' },
    component: markRaw(TextField)
  }
])

watch(
  () => form.value.field1,
  (value) => {
    fields.value.length = 1

    if (value === 'n') {
      nextTick(() => {
        fields.value.push({
          title: 'field3',
          field: 'field3',
          isHeader: true,
          groupAttr: { class: 'w-[32.5%]' },
          component: markRaw(TextField)
        })
      })
    } else {
      fields.value.push({
        title: 'field2',
        field: 'field2',
        isHeader: true,
        groupAttr: { class: 'w-[32.5%]' },
        component: markRaw(TextField)
      })
    }
  }
)
</script>
