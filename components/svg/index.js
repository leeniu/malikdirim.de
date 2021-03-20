/**
 * This file is imported in `main.js`. All components in this directory
 * are available in all other components by default. No import needed.
 *
 * Note: The final component name is either set via the components `name`
 * property, or derived from the filename less its extension.
 */

import Vue from 'vue'

const requireComponent = require.context('.', false, /[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = componentConfig.default.name
    ? componentConfig.default.name
    : fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')

  Vue.component(componentName, componentConfig.default || componentConfig)
})
