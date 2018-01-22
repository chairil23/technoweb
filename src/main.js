// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import VueSession from 'vue-session'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import VueCurrencyFilter from 'vue-currency-filter'
import Alert from './components/Alert.vue'
import Loading from './components/Loading.vue'
import VuePaginateAl from 'vue-paginate-al'
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
  VStepper,
  VDialog,
  VRadioGroup,
  VSnackbar,
  VAlert,
  VProgressCircular,
  VBadge,
  VChip
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
    VStepper,
    VDialog,
    VRadioGroup,
    VSnackbar,
    VAlert,
    VProgressCircular,
    VBadge,
    VChip
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

Vue.use(VueSession)

Vue.component('icon', Icon)
Vue.component('alert', Alert)
Vue.component('loading', Loading)
Vue.component('vue-paginate-al', VuePaginateAl)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App, colors}
})
