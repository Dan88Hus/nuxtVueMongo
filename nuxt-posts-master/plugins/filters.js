import Vue from 'vue'
import moment from 'moment'

// we created filter to appply it globally, instead of prosps each component
// Plugins usually add global-level functionality to Vue. 
// Some plugins provided by Vue.js official plugins such as vue-router automatically calls Vue.use()

Vue.filter('formatDate', (date, dateFormat = 'LL') => {
  if (!date) {
    return ''
  }

  return moment(date).format(dateFormat)
})
