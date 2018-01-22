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
          :src= "base + product.images"
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
                  <div class="display-1 black--text">{{product.jdl_Pdk}}</div>
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
              <v-select class="pt-1 pl-4" v-model="item.kuantitas" :items="quantity" single-line bottom></v-select>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex md3>
              <v-subheader>Jenis Kertas: </v-subheader>
            </v-flex>
            <v-flex md3>
              <v-select class="pt-1 pl-4" v-model="item.jenis_kertas" :items="jenis" single-line bottom></v-select>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-btn outline color="primary">
              <v-icon color="primary">email</v-icon>
              <span class="text">Kirim Pesan</span>            
            </v-btn>
            <v-btn outline color="primary" @click="addItem()">
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
                  {{product.username}}
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
                 {{product.description}}
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
      base: 'http://localhost:8000/uploads/',
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
      quantity: [
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      item: {
        product_id: this.$route.params.id,
        kuantitas: {text: ''},
        jenis_kertas: {text: ''},
        model: {text: ''},
        kain: {text: ''},
        ukuran: {text: ''},
        warna: {text: ''},
        jenis_cetak: {text: ''},
        bahan: {text: ''},
        sisi: {text: ''},
        jilid: {text: ''},
        lembar: {text: ''},
        cetak_depan: {text: ''},
        cetak_belakang: {text: ''},
        cetak_lengan_kanan: {text: ''},
        cetak_lengan_kiri: {text: ''},
        kaos_metode: {text: ''}
      },
      form: {
        product_id: '',
        kuantitas: '',
        jenis_kertas: '',
        model: '',
        kain: '',
        ukuran: '',
        warna: '',
        jenis_cetak: '',
        bahan: '',
        sisi: '',
        jilid: '',
        lembar: '',
        cetak_depan: '',
        cetak_belakang: '',
        cetak_lengan_kanan: '',
        cetak_lengan_kiri: '',
        kaos_metode: ''
      }
    }
  },
  computed: {
    test () {
      this.form.product_id = parseInt(this.$route.params.id)
      this.form.kuantitas = this.item.kuantitas.text
      this.form.jenis_kertas = this.item.jenis_kertas.text
      this.form.model = this.item.model.text
      this.form.kain = this.item.kain.text
      this.form.ukuran = this.item.ukuran.text
      this.form.warna = this.item.warna.text
      this.form.jenis_cetak = this.item.jenis_cetak.text
      this.form.bahan = this.item.bahan.text
      this.form.sisi = this.item.model.sisi
      this.form.jilid = this.item.jilid.text
      this.form.lembar = this.item.lembar.text
      this.form.cetak_depan = this.item.cetak_depan.text
      this.form.cetak_belakang = this.item.cetak_belakang.text
      this.form.cetak_lengan_kanan = this.item.cetak_lengan_kanan.text
      this.form.cetak_lengan_kiri = this.item.cetak_lengan_kiri.text
      this.form.kaos_metode = this.item.kaos_metode.text
      return this.form
    },
    product () {
      console.log(this.form.cart_id, 'CARTID')
      return this.$store.getters.productDetail
    }
  },
  created () {
    this.$store.dispatch('getProduct', this.$route.params.id)
  },
  methods: {
    addItem () {
      console.log(this.$session.get('token'), 'wewe')
      if (this.test.kuantitas !== 0) {
        this.$store.dispatch('addToCart', this.test)
      }
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


