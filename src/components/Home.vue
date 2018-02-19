<template>
  <v-container fluid grid-list-md class="pt-5"> 
    <v-layout row wrap>
      <v-flex class="ma-0 pa-0">        
        <v-carousel hide-delimiters >
          <v-carousel-item flat v-for="(item,i) in items" v-bind:src="item.src" :key="i">           
          </v-carousel-item>          
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="grey lighten-4">
      <v-flex dark class="display-1 text-md-center my-3 py-5">
        Our Products
      </v-flex>
    </v-layout>
    <router-view :base="base"></router-view>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      // base: 'http://localhost:8000/uploads/',
      items: [
        {
          src: '/src/assets/carousel/slide_1.jpg'
        },
        {
          src: '/src/assets/carousel/slide_2.jpg'
        },
        {
          src: '/src/assets/carousel/slide_3.jpg'
        }
      ]
    }
  },
  computed: {
    base () {
      return this.$store.getters.url
    },
    image () {
      return this.base + this.product.image
    }
    // pages () {
    //   console.log(this.page, 'PAGES')
    //   this.$store.dispatch('getAllProducts', this.page)
    // }
  },
  created () {
    this.$store.dispatch('getAllProducts', this.page)
  }
}
</script>
<style scoped>

.harga{
  color:gray;
  text-decoration: none;
}

.text-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;  
}

to{
    text-decoration: none;
}
</style>
