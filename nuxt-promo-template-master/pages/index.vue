<template>
  <div>
    <!-- hero section  -->
    <!-- moved to  shared/hero.vue component-->
    <!-- hero section -->
    <hero />

    <section class="section">
      <div class="container">
        <h1 class="title">Featured Courses</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <!-- CARD-ITEM -->
            <coursecard />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <!-- CARD-ITEM -->
            <blogcard />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import coursecard from '../components/coursecard.vue'
import hero from '../components/shared/hero.vue'
import blogcard from '../components/blogcard.vue'


export default {
  components: {
    coursecard, blogcard, hero
    
  },
}
  
</script>

<style scoped lang="scss">
// Home page
.links {
  padding-top: 15px;
}
</style>
