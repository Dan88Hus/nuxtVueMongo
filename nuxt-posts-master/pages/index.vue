<template>
  <div>
    <navbar />
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Newest Posts</h1>
                  <hr>
                </div>
                <div v-if="posts && posts.length > 0">
                  <post-item
                    v-for="post in posts"
                    :key="post._id"
                    :title="post.title"
                    :subtitle="post.subtitle"
                    :date="post.createdAt"
                    :isRead="post.isRead"
                    :id="post._id"
                  />
                </div>
                <div v-else>
                  No Posts :(
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <form>
        <input type="text" v-model="form.title">
        <input type="text" v-model="form.subtitle">
      </form>
      {{isFormValid()}} -->
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import PostItem from '~/components/PostItem'
import { fetchPostsAPI } from '~/store/post'
export default {
  components: {
    Navbar, PostItem
  },
  data() {
    return {
      title: 'My Title From Page',
      form: {
        title: 'some title',
        subtitle: 'some subtitle'
      }
    }
  },
  fetch({store}) { // context.store u destructure hali
    if (store.getters['post/hasEmptyItems']) {
      return store.dispatch('post/fetchPosts') // doya yolu storeun altinda post file ve /functionName
    }
  },
  // mounted ve computed comment edildi ve asynData(){} yazildi 
  // async asyncData(){
    // const posts = await fetchPostsAPI()
    // return {posts, 2nd Arg can be used for template variable}
  // }

  mounted() { // mounted created in server da ki soylenisi, called only on client side
    this.$store.dispatch('post/getArchivedPosts')
  },
  computed: {
    // posts degistiginde computed property also update itself
    // computed lari template icinde trigger etmek istedigimide () kullanmiyoruz ama methodlarda kullaniyoruz cunku methodlar function 
    // functionlar her cagirdigimizda calisir ama computed lar bagli oldugu var, degistiginde calisir
    // computed ares cached so theyy remember value but methods not.
    posts() {
      return this.$store.state.post.items
    },
    archivedPosts() {
      debugger
      return this.$store.state.post.archivedItems
    }
  },
  methods: {
    isFormValid() {
      console.log('isFormValid has been called')
      if (this.form.title) {
        return true
      }

      return false
    }
  }
}
</script>
<style scoped>
</style>








