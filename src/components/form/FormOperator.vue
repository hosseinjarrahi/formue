<template>
  <div class="flex flex-wrap">
    {{
      (() => {
        fieldNumber = 0
      })()
    }}
    <component
      v-for="(schema, indexMain) in filteredFields"
      :is="getGroupComp(schema)"
      :label="getSafe(schema, 'groupLabel')"
      :key="indexMain"
      v-bind="{ ...defaltGroupAttr, ...getSafe(schema, 'groupAttr') }"
    >
      <component
        :is="getParentComp(schema)"
        v-for="property in has(schema, 'groupLabel') ? schema.items : [schema]"
        :key="property.field"
        v-bind="{ ...defaltParentAttr, ...getSafe(property, 'parentAttr', {}) }"
      >
        <component :index="fieldNumber++" v-bind="bind(property)" :is="getComponent(property)" />
      </component>
    </component>
  </div>
</template>

<script setup>
import { listen } from '@/helpers/emitter'
import Div from '@/components/utilities/DivComp.vue'
import { registeredFields } from '@/helpers/fieldsStore'
import FieldSet from '@/components/utilities/FieldSet.vue'
import { ref, defineProps, defineEmits, computed } from 'vue'
import { sortBy, has, pickBy, isString, isEmpty, flatten, get as getSafe } from 'lodash'

const props = defineProps({
  fields: {},
  form: {},
  index: {}
})

const defaltParentAttr = {
  class: 'flex p-1 flex-wrap w-full'
}

const defaltGroupAttr = {
  class: 'my-0 p-1 w-full'
}

const emit = defineEmits(['updateField'])

let filters = ref({})
let sharedData = ref({})

const flatFields = computed(() => flatten(props.fields))
const sortedFields = computed(() => sortBy(props.fields, 'order'))
const filteredFields = computed(() =>
  sortedFields.value.filter((schema) => (has(schema, 'if') ? schema.if(props.form) : true))
)

const errors = ref({})

function bind(schema) {
  return {
    form: props.form,
    fields: props.fields,
    filters: filters.value,
    getProp: getProp(schema),
    getPropsExcept: getPropsExcept(schema),
    getFromSchema: getFromSchema(schema),
    value: getSafe(props.form, schema.field),
    error: getSafe(errors.value, schema.field, false),
    updateField: (value) => updateField(schema, value),
    parentChanged: (value, init = false) => parentChanged(schema, value, init)
  }
}

function validate() {
  for (const schema of props.fields) {
    validation(schema, getSafe(props.form, schema.field))
  }
}

listen('validate', (result) => {
  validate()
  result.value.errors = pickBy(errors.value, (val) => !!val)
  result.value.isValid = isEmpty(result.value.errors)
})

function validation(schema, value) {
  if (!has(schema, 'validation')) return

  const isValid = schema.validation(value)

  errors.value[schema.field] = isValid !== true ? isValid : false
}

function updateField(schema, value) {
  validation(schema, value)

  emit('updateField', { ...schema, value })
}

function parentChanged(schema, value, init = false) {
  updateField(schema, value)

  if (!has(schema, 'rel.child.model')) {
    return
  }

  value = Array.isArray(value) ? value : [value]

  let items = getSafe(sharedData.value, schema.rel.child.model)

  filters.value[schema.rel.child.model] = items.filter((item) => {
    if (item[schema.rel.child.ownKey]) return value.indexOf(item[schema.rel.child.ownKey].id) > -1
    return false
  })

  filters.value = { ...filters.value }
  !init && parentChanged(findFieldByModel(schema.rel.child.model), null)
}

function findFieldByModel(model) {
  return flatFields.value.filter((f) => f?.rel?.model == model)[0]
}

function getComponent(schema) {
  return has(schema, 'component') && isString(schema.component)
    ? registeredFields[schema.component]
    : schema.component
}

function getProp(field) {
  return (prop, def = null) => getSafe(field, prop === '*' ? 'props' : `props.${prop}`, def)
}

function getPropsExcept(field) {
  return (exceptProps) => {
    const props = getSafe(field, 'props')
    const out = {}
    for (const key in props) {
      if (!exceptProps.includes(key)) {
        out[key] = props[key]
      }
    }
    return out
  }
}

function getFromSchema(field) {
  return (prop, def = null) => getSafe(field, prop, def)
}

function getParentComp(schema) {
  if (has(schema, 'parentComponent')) {
    return getSafe(schema, 'parentComponent')
  }

  return Div
}

function getGroupComp(schema) {
  if (has(schema, 'groupComponent')) {
    return getSafe(schema, 'groupComponent')
  }

  if (has(schema, 'groupLabel')) {
    return FieldSet
  }

  return Div
}
</script>
