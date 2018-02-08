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
    <v-container grid-list-md class="mt-0 pt-0">      
      <v-layout row wrap align-center justify-start>
        <v-flex
          md3 fill-height
          v-for="product in allProducts.data"
          :key="product.jdl_Pdk"
          class="px-3">
          <v-container class="px-1 pt-0 mt-0">
            <v-card flat fill-height class="cards grey lighten-4 mb-4" :to="{path: '/product/'+product.id}">
              <v-card-media
                :src="base+'/uploads/'+ product.images[0].images"
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
                      <span class="subheading harga">{{50000 | currency}}</span>  
                    </v-flex>
                  </v-layout>     
                <!-- </v-card-actions>    -->
            </v-card>            
          </v-container>          
        </v-flex>
      </v-layout>
      <div class="text-xs-center py-5">
        <vue-paginate-al :totalPage="allProducts.last_page ? allProducts.last_page : 0" customActiveBGColor="success" @btnClick="pages"></vue-paginate-al>
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      // base: 'http://localhost:8000/uploads/',
      items: [
        {
          src: '/static/v.png'
        },
        {
          src: '/static/v.png'
        },
        {
          src: '/static/v.png'
        },
        {
          src: '/static/v.png'
        }
      ],
      products: [
        {
          src: '/static/v.png', title: 'haidflmslfdmg;lsfmdglsmdf;gms;flgmsl;fdgmmdmfg', harga: '200.000', flex: '3'
        },
        {
          src: '/static/v.png', title: 'hai', harga: '200.000', flex: '3'
        },
        {
          src: '/static/v.png', title: 'hai', harga: '200.000', flex: '3'
        },
        {
          src: '/static/v.png', title: 'hai', harga: '200.000', flex: '3'
        },
        {
          src: '/static/v.png', title: 'hai', harga: '200.000', flex: '3'
        },
        {
          src: '/static/v.png', title: 'hai', harga: '200.000', flex: '3'
        },
        {
          src: '/static/v.png', title: 'hai', harga: '200.000', flex: '3'
        }
      ],
      page: 1
    }
  },
  computed: {
    base () {
      return this.$store.getters.url
    },
    allProducts () {
      if (this.$store.getters.allProducts(this.page)) {
        return this.$store.getters.allProducts(this.page)
      } else {
        return {}
      }
    },
    image () {
      return this.base + this.product.image
    }
    // pages () {
    //   console.log(this.page, 'PAGES')
    //   this.$store.dispatch('getAllProducts', this.page)
    // }
  },

  methods: {
    pages (n) {
      console.log(this.allProducts, 'test')
      this.page = n
      this.$store.dispatch('getAllProducts', n)
    }
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
