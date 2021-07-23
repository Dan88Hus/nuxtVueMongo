<template>
  <div class="container">
    <errorview :title="'Ooooops, you are not authenticated to visit this page, please login'"
               :status="'401'"
               :navigateToPage="'login'"
               :navigateToText="'Navigate to Login Page'" />
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
