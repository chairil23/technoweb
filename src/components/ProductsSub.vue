<template>
  <v-container grid-list-md class="mt-0 pt-0">      
    <v-layout row wrap align-center justify-start>
      <v-flex
        md3 fill-height
        v-for="product in subProducts.data"
        :key="product.jdl_Pdk"
        class="px-3">
        <v-container class="px-1 pt-0 mt-0">
          <v-card flat hover fill-height class="cards grey lighten-4 mb-4" :to="{path: '/product/'+product.id}">
            <v-card-media v-if="product.images.length"
              :src="base+'/uploads/'+ product.images[0].images"
              height="250px"
              class="white"
            >                
            </v-card-media>   
            <v-card-media v-else
              src="/static/images.png"
              height="250px"
              class="white"
            >                
            </v-card-media>      
              <!-- <v-card-actions  primary-title class="grey lighten-4" @click=""> -->
                <v-layout row class="pt-2">
                  <v-flex class="text-xs-center text-title">
                    <span class="title harga">{{product.jdl_Pdk}}</span>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex md12 xs12 class="text-xs-center">
                    <span class="subheading harga">{{total(product.harga_awal, product.materials) | currency}}</span>  
                  </v-flex>
                </v-layout>     
              <!-- </v-card-actions>    -->
          </v-card>            
        </v-container>          
      </v-flex>
    </v-layout>
    <div class="text-xs-center py-5">
      <vue-paginate-al :totalPage="subProducts.last_page ? subProducts.last_page : 0" customActiveBGColor="success" @btnClick="pages"></vue-paginate-al>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['base'],
  data () {
    return {
      page: 1
    }
  },
  computed: {
    subProducts () {
      return this.$store.getters.subProducts
    }
  },
  methods: {
    total (desain, material) {
      if (material.length !== 0) {
        console.log(material[0].harga, 'materials1', desain)
        return material[0].harga + desain
      } else {
        return desain
      }
    },
    pages (n) {
      this.page = n
      console.log(this.page)
      this.$store.dispatch('subProducts', n)
    }
  },
  created () {
    this.$store.dispatch('getSubProducts', this.$route.params.id)
  }
}
</script>

