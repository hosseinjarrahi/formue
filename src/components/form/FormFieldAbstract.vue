<script>
export default {
  name: 'FormFieldAbstract',

  props: [
    'updateField',
    'parentChanged',
    'field',
    'fields',
    'form',
    'filters',
    'index',
    'getProp',
    'getFromSchema',
    'value'
  ],

  mounted() {
    this.$emit('mounted')
  }
}
</script>
