<template>
  <MForm :fields="fields" v-model="form" :form-data="formData" name="registerForm" />
</template>

<script setup>
/* eslint-disable no-unused-vars */

import TextField from './components/exampleField/TextField.vue'
import useFormue from './composables/useFormue'
import MForm from './components/MForm.vue'
import { ref, onBeforeMount } from 'vue'

onBeforeMount(() => {
  const { registerFields } = useFormue()
  registerFields({
    text: TextField
  })
})

const form = ref({ name: '' })
const formData = ref({ name: 'test' })

const fields = [
  {
    title: 'نام محصول',
    field: 'name',
    component: 'text',
    isHeader: true,
    validation(value) {
      return value.length > 5 || 'غلطه'
    }
  },
  {
    title: 'نام محصول',
    field: 'namasde',
    component: 'text',
    isHeader: true,
    validation(value) {
      return value.length > 5 || 'غلطه'
    }
  }
]
</script>
