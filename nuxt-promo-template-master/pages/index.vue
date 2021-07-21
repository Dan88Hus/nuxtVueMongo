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
          <!-- iterate columns with v-for dont forget key-->
          <div v-for="course in courses" :key="course._id" 
          class="column is-one-quarter">
            <!-- CARD-ITEM -->
            <coursecard :course="course"/>
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
    <pre>{{courses}}</pre>
  </div>
</template>

<script>
import coursecard from '../components/coursecard.vue'
import hero from '../components/shared/hero.vue'
import blogcard from '../components/blogcard.vue'
import {mapState} from 'vuex'


export default {
  components: {
    coursecard, blogcard, hero
    
  },
  computed: {
    ...mapState({
      courses: state=> state.course.items
    })
  },
  async fetch({store}){
     
    await store.dispatch('course/fetchCourses')
    // debugger
  }
}
  
</script>

<style scoped lang="scss">
// Home page
.links {
  padding-top: 15px;
}
</style>
