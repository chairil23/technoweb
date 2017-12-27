<template>
  <v-container app grid-list-md class="pa-5">
    <v-layout row>
      <v-flex height="100px">
        <v-breadcrumbs class="px-0">
          <v-icon class="balck" slot="divider">keyboard_arrow_right</v-icon>
          <v-breadcrumbs-item
          v-for= "item in items"
          :key= "item.text"
          :disabled= "item.disabled"
          >
          {{item.text}}
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md4 class="pt-0 mt-0">
        <v-card>
          <v-card-media
          flat
          :src= "image"
          height= "300px"
          >
            <v-card-action
            >
            </v-card-action>                      
          </v-card-media>
        </v-card>
      </v-flex>        
      <v-flex>        
      </v-flex>
      <v-flex md8 class="white" >         
        <v-container>
          <v-layout>
            <v-flex md10>
               <v-layout>
                <v-flex>
                  <div class="display-1 black--text">Kartu Nama 3 x 3 CM</div>
                </v-flex>            
              </v-layout> 
              <v-layout class="pb-2">
                <v-flex>
                  <span class="count headline red--text">Rp 5000,-</span>   
                </v-flex>            
              </v-layout>
            </v-flex>            
          </v-layout>           
          <v-divider></v-divider>    
          <v-layout row class="pt-3">
            <v-flex>
              <v-layout row class="shipping">
                <v-flex>
                  <v-layout>
                    <v-flex>
                      <v-icon class="pb-5">local_shipping</v-icon>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex>                      
                    </v-flex>
                  </v-layout>                  
                </v-flex>
                <v-flex md12 class="pb-0">
                  <v-layout>
                    <v-flex md2>
                      <span class="body-1">Pengiriman ke: </span>                       
                    </v-flex>
                    <v-flex md4>
                       <span class="body-1">Medan, Sumatera Utara</span>
                    </v-flex>                    
                  </v-layout>
                  <v-layout>
                    <v-layout>
                      <v-flex md2>
                        <span class="body-1 pl-1">Ongkos Kirim: </span>
                      </v-flex>   
                      <v-flex md4>
                        <span class="body-1 pl-1">Rp 30.000</span>
                      </v-flex>                     
                    </v-layout>                    
                  </v-layout>                 
                </v-flex>
              </v-layout>              
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout>
            <v-flex md3>
              <v-subheader>Jumlah: </v-subheader>
            </v-flex>
            <v-flex md3>
              <v-select class="pt-1 pl-4" type="number" v-model="t" :items="jumlah" single-line bottom></v-select>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex md3>
              <v-subheader>Jenis Kertas: </v-subheader>
            </v-flex>
            <v-flex md3>
              <v-select class="pt-1 pl-4" v-model="j" :items="jenis" single-line bottom></v-select>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-btn outline color="primary">
              <v-icon color="primary">email</v-icon>
              <span class="text">Kirim Pesan</span>            
            </v-btn>
            <v-btn outline color="primary">
              <v-icon color="primary">add_shopping_cart</v-icon>
              <span class="text">Masukkan Keranjang</span>            
            </v-btn>
            <v-btn color="primary">
              <v-icon flat color="white">shopping_cart</v-icon>
              <span class="text">Beli</span>          
            </v-btn>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout row class="pt-3">       
      <v-flex md4 class="white pb-0 pt-2 px-0">
        <v-layout>
          <v-flex md4>
            <v-layout>  
              <v-flex class="text-xs-center"> 
                  <v-avatar size="80px" slot="activator">
                    <img src="/static/v.png" alt="">
                  </v-avatar>       
              </v-flex>   
            </v-layout>                          
          </v-flex>
          <v-flex md8> 
            <v-layout>
              <v-flex>
                <span class="text title" >
                  Reza Surya Kamajaya
                </span>
              </v-flex>                    
            </v-layout>
            <span class="text body-1">Penilaian:</span>   
            <star-rating              
              v-bind:increment="0.5"
              v-bind:max-rating="5"
              inactive-color="#000"
              active-color="gold"
              v-bind:star-size="20"
              class="custom-text"
            >
            </star-rating>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md4 class="white px-0"> 
        <v-card flat tile hover @click="" class="px-0">
          <v-layout>          
            <v-flex class="py-4">
              <v-layout>
                <v-flex class="text-xs-center pb-0">
                  <v-icon color="primary" class="pb-2">collections</v-icon>
                  <span class="tab">
                    64
                  </span>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex class="tab text text-xs-center pt-0">
                  <span>Produk</span>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>   
        </v-card>       
      </v-flex>
      <v-flex md4 class="white px-0"> 
        <v-card flat tile hover @click="" class="px-0 py-0">
          <v-layout>          
            <v-flex class="py-4">
              <v-layout>
                <v-flex class="text-xs-center pb-0">
                  <v-icon color="primary" class="pb-2">person</v-icon>
                  <span class="tab">
                    3 Bulan lalu
                  </span>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex class="tab text text-xs-center pt-0">
                  <span>bergabung</span>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>   
        </v-card>       
      </v-flex>        
    </v-layout> 
    <v-layout>
      <v-flex>

      </v-flex>
    </v-layout>
    <v-layout>
      <v-container class="white">
       <v-layout>
         <v-container>
            <v-layout>
              <v-flex>
                <h2>Rincian Produk</h2>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout>
              <v-flex>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quod hic doloribus officia fugiat provident, sint temporibus adipisci consectetur ab nulla ipsam ipsa? Adipisci, id. Vero architecto illum quidem!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto animi sapiente expedita similique quia velit incidunt eaque suscipit quidem dolore? Distinctio, soluta consequatur sint dicta corporis a. Ducimus, unde harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa laborum soluta enim eum, necessitatibus repudiandae minus pariatur quaerat eaque ab aut laboriosam recusandae, illo fugit ipsa modi, sed nam.
                  

                  fef
                </p>
              </v-flex>
            </v-layout>  
         </v-container>
        </v-layout>      
      </v-container>
    </v-layout>  
  </v-container>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating
  },
  data () {
    return {
      image: '/static/v.png',
      e1: null,
      t: null,
      j: null,
      items: [
        {text: 'Home', disabled: false},
        {text: 'Kartu Nama', disabled: false},
        {text: 'Kartu Nama 3 x 3', disabled: true}
      ],
      j1: null,
      jumlah: [
          { text: 50 },
          { text: 100 }
      ],
      jenis: [
        {
          text: 'Standart'
        },
        {
          text: 'Extra Fancy'
        }
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
<style scoped>
  .count.headline {
   font-weight:bolder;
   color: rgb(212, 4, 4);
  }

  .body-1 {
    color: gray;
  }
  
  .shipping{
    height: 69px;
  }
  .text{
    text-transform: capitalize
  }
  .title{
    font-weight: bold
  }
  .custom-text {
    font-weight: bold;
    font-size: 1.9em;
    padding-right: 10px;
    border-radius: 5px;
    color: #999;
    background: #fff;
  }
  .vue-star-rating-rating-text{
    margin-top: 2px;
  }
  .tab{
    font-weight: 600;
    color:orange;
    font-size: 20px;
    padding-right: 15px
  }
  .tab.text{
    color: #999
  }
</style>


