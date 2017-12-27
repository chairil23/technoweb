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
    <v-layout row wrap>
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
    </v-layout>
    <v-divider light></v-divider>
    <v-layout row wrap class="grey lighten-4">
      <v-flex dark class="display-1 text-md-center py-5">
        Our Products
      </v-flex>
    </v-layout>
    <v-container grid-list-md class="mt-0 pt-0">      
      <v-layout row wrap align-center justify-start>
        <v-flex
          md4 fill-height
          v-for="card in products"
          :key="card.title"
          class="">
          <v-container class="px-1 pt-0 mt-0">
            <v-card flat fill-height class="white lighten-4" hover tile>
              <v-card-media
                :src="card.src"
                height="300px"
                @click=""
              >                
              </v-card-media>
              <v-divider light></v-divider>              
                <v-card-title primary-title class="grey lighten-4" @click="">
                    <span class="body-2 black--text">{{card.title}}</span>
                </v-card-title>    
              <v-divider></v-divider>
              <v-card-actions class="primary">
                <v-layout align-center xs12>
                  <v-flex xs6 order-md1>
                    <div class="title white--text text-xs-end ml-3">Rp {{card.harga}},-</div>    
                  </v-flex>
                  <v-flex xs2 order-md2 justify-space-between>
                    <v-spacer></v-spacer>
                    <v-btn medium class="red darken-1 my-0" ><v-icon class="orange--text" left>add_shopping_cart</v-icon> <span class="white--text">Add to Chart</span></v-btn>  
                </v-flex>
                    
                </v-layout>                        
              </v-card-actions> 
            </v-card>            
          </v-container>          
        </v-flex>
      </v-layout>
      <div class="text-xs-center py-5">
        <v-pagination :length.number="10" v-model="page" :total-visible="7" round></v-pagination>
      </div>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
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
            src: '/static/v.png', title: 'hasdfslfmld;mflsmdflmdfdgmdsfsfsdfsdfsdfgmi', harga: '200.000', flex: '3'
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
    }
  }
</script>