<template>
  <v-container fluid grid-list-md class="ma-0 pa-0"> 
    <v-layout row wrap>
      <v-flex class="ma-0 pa-0">        
        <v-carousel hide-delimiters>
          <v-carousel-item flat v-for="(item,i) in items" v-bind:src="item.src" :key="i">           
          </v-carousel-item>          
        </v-carousel>
      </v-flex>
    </v-layout>
    <!-- <v-layout row wrap>
      <v-flex xs12 sm6 md3 order-md4 order-sm2 class="pa-0">
        <v-card light tile flat>
          <v-card-text class="py-5">#1</v-card-text>
        </v-card>
      </v-flex>
        <v-flex xs12 sm6 md3 order-md3 order-sm1 class="pa-0">
          <v-card light tile flat>
            <v-card-text class="py-5">#2</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md2 order-sm4 class="pa-0">
          <v-card light tile flat>
            <v-card-text class="py-5">#3</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md1 order-sm3 class="pa-0">
          <v-card light tile flat>
            <v-card-text class="py-5">#4</v-card-text>
          </v-card>
        </v-flex>
    </v-layout> -->
    <v-divider light></v-divider>
    <v-layout row wrap class="grey lighten-4">
      <v-flex dark class="display-1 text-md-center my-5 py-5" @click="test">
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
            <v-card flat fill-height class="grey lighten-4 mb-4" :to="{path: '/productdetail'}">
              <v-card-media
                :src="base + product.images"
                height="250px"
                @click=""
                class="white"
              >                
              </v-card-media>
              <v-divider light></v-divider>              
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
        <v-pagination color="black" :length.number="allProducts.last_page" v-model="page" :click="wew" :total-visible="7" round></v-pagination>
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      base: 'http://localhost:8000/uploads/',
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
    allProducts () {
      console.log(this.page)
      return this.$store.getters.allProducts
    },
    image () {
      return this.base + this.product.image
    },
    wew () {
      this.$store.dispatch('getAllProducts', this.page)
    }
  },

  methods: {
    test () {
      console.log(this.allProducts)
    },
    pages () {
      this.$store.dispatch('getAllProducts', this.page)
    }
  },
  // mounted: function () {
  //   this.$nextTick(function () {
  //     this.$store.dispatch('getAllProducts', this.page)
  //   })
  // },
  created () {
    this.$store.dispatch('getAllProducts', this.page)
  }
}
</script>
<style scoped>

.harga{
  color:gray;
}

.text-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
