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
    component: 'text'
  }
])
</script>
