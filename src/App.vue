<template>
  <MForm :fields="fields" v-model="form" :form-data="formData" />
</template>

<script setup>
/* eslint-disable no-unused-vars */

import TextField from './components/exampleField/TextField.vue'
import { registerFields } from './helpers/fieldsStore'
import MForm from './components/MForm.vue'
import { ref } from 'vue'
import FieldSet from '@/components/utilities/FieldSet.vue'

registerFields({
  text: TextField
})

const form = ref({ name: '' })
const formData = ref({ name: 'test' })

const fields = [
  {
    groupLabel: 'group',
    groupComponent: FieldSet,
    items: [
      {
        groupAttr: { class: 'w-1/2' },
        parentAttr: { class: 'w-1/2' },
        title: 'نام سیبش',
        field: 'name',
        component: 'text',
        isHeader: true,
        validation(value) {
          return value.length > 5 || 'غلطه'
        }
      },
      {
        title: 'نام سیب',
        field: 'namasde',
        component: 'text',
        isHeader: true,
        validation(value) {
          return value.length > 5 || 'غلطه'
        }
      },
      {
        title: 'نام سیب',
        field: 'namasde',
        component: 'text',
        isHeader: true,
        validation(value) {
          return value.length > 5 || 'غلطه'
        }
      },
      {
        title: 'نام سیب',
        field: 'namasde',
        component: 'text',
        isHeader: true,
        validation(value) {
          return value.length > 5 || 'غلطه'
        }
      }
    ]
  }
]
</script>
