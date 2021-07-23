<template>
  <div class="container">
    <errorview :title="'Ooooops, you are not authorized to visit this page, please talk to administrator in order to get access rights'"
               :status="'401'"
               :navigateToPage="'/'"
               :navigateToText="'Navigate to Home Page'" />
  </div>
</template>

<script>
import errorview from '../components/shared/errorview.vue'
export default {
  components: {
    errorview
  }
}
</script>

<style scoped>
</style>
