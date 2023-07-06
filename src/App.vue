<template>
  <MForm :fields="fields" v-model="form" :form-data="formData" name="registerForm" />
</template>

<script setup>
/* eslint-disable no-unused-vars */

import TextField from './components/exampleField/TextField.vue'
import useFormue from './composables/useFormue'
import MForm from './components/MForm.vue'
import { ref, onBeforeMount } from 'vue'
import FieldSet from '@/components/utilities/FieldSet.vue'

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
  },
  {
    title: 'نام سی',
    field: 'namaaaasde',
    component: 'text',
    isHeader: true,
    validation(value) {
      return value.length > 5 || 'غلطه'
    }
  },
  {
    title: 'نام سی',
    field: 'namaaaasde',
    component: 'text',
    isHeader: true,
    validation(value) {
      return value.length > 5 || 'غلطه'
    }
  },
  {
    title: 'نام سی',
    field: 'namaaaasde',
    component: 'text',
    isHeader: true,
    validation(value) {
      return value.length > 5 || 'غلطه'
    }
  },
  {
    groupLabel: 'group',
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
</script>
