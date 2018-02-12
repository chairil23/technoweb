<template>
  <transition name="fade" mode="out-in">
    <v-container class="white">
    
      <v-layout row wrap align-center justify-start>
        <v-flex
          md2 fill-height
          v-for="product in getProduct.data"
          :key="product.jdl_Pdk"
          class="">
          <v-container class="px-1 pt-0 mt-0">
            <v-card flat hover fill-height class="cards grey lighten-4 mb-4" :to="{path: '/product/'+product.id}">
              <v-card-media
                :src="base+'/uploads/'+ product.images[0].images"
                height="50px"
                class="white"
              >                
              </v-card-media>       
                <!-- <v-card-actions  primary-title class="grey lighten-4" @click=""> -->
                  <v-layout row class="">
                    <v-flex class="text-xs-center text-title">
                      <span class="caption">{{product.jdl_Pdk}}</span>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex md12 xs12 class="text-xs-center harga">
                      <span class="caption">{{total(product.harga_awal, product.materials) | currency}}</span>  
                    </v-flex>
                  </v-layout>     
                <!-- </v-card-actions>    -->
            </v-card>            
          </v-container>          
        </v-flex>
      </v-layout>
      <div class="text-xs-center">
        <vue-paginate-al :totalPage="getProduct.last_page ? getProduct.last_page : 0" customActiveBGColor="success" @btnClick="pages"></vue-paginate-al>
      </div>
  
    </v-container> 
  </transition>   
</template>
<script>
export default {
  props: ['product'],
  data () {
    return {
      page: 1
    }
  },
  computed: {
    base () {
      return this.$store.getters.url
    },
    getProduct () {
      return this.$store.getters.pFreelancer
    }
  },
  beforeMount () {
    let form = {
      page: this.page,
      freelancer_id: this.product.freelancer_id
    }
    this.$store.dispatch('getProductFreelancer', form)
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
      let form = {
        page: this.page,
        freelancer_id: this.product.freelancer_id
      }
      console.log(this.page)
      this.$store.dispatch('getProductFreelancer', form)
    }
  }
}
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.harga{
  color:gray;
  text-decoration: none;
}

.text-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;  
}
</style>
