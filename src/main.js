// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'

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
  VTabs
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
    VTabs
  },
  theme: {
    primary: '#FFC107',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App, colors}
})
