// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import VueCurrencyFilter from 'vue-currency-filter'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCarousel,
  VMenu,
  VCard,
  VDivider,
  VPagination,
  VTextField,
  VCheckbox,
  VForm,
  VBreadcrumbs,
  VSelect,
  VSubheader,
  VAvatar,
  VTabs,
  VDataTable,
  VTooltip,
  VStepper
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCarousel,
    VMenu,
    VCard,
    VDivider,
    VPagination,
    VTextField,
    VCheckbox,
    VForm,
    VBreadcrumbs,
    VSelect,
    VSubheader,
    VAvatar,
    VTabs,
    VDataTable,
    VTooltip,
    VStepper
  },
  theme: {
    primary: '#424244',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.use(VueCurrencyFilter, {
  symbol: 'Rp',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App, colors}
})
