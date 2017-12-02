import { createDecorator } from 'vue-class-component'

export function fnal (getterType) {
  return createDecorator((options, key) => {
    options[getterType] = key
  })
}
