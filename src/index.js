import MForm from './components/MForm.vue'
import emitter from './helpers/emitter'
import FormFieldAbstract from './components/form/FormFieldAbstract.vue'
import propsField from './helpers/propsField'
import { registerFields } from './helpers/fieldsStore'
import './assets/main.css'

export default MForm

export { emitter, FormFieldAbstract, propsField, registerFields }
