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
                  <span class="count headline red--text">{{product.harga_awal | currency}}</span>   
                </v-flex>            
              </v-layout>
            </v-flex>            
          </v-layout>           
          <v-divider></v-divider>    
          <div v-if="product.subcategory_id === 1">
            <kartu-nama @send="receive"></kartu-nama>          
          </div>
           <div v-else-if="product.subcategory_id === 2">
            <square-card @send="receive"></square-card>          
          </div>   
          <div v-else-if="product.subcategory_id === 3">
            <amplop @send="receive"></amplop>          
          </div>   
          <div v-else-if="product.subcategory_id === 4">
            <kop-surat @send="receive"></kop-surat>          
          </div>
           <div v-else-if="product.subcategory_id === 5">
            <stempel @send="receive"></stempel>          
          </div>   
          <div v-else-if="product.subcategory_id === 6">
            <kalender @send="receive"></kalender>          
          </div>  
          <div v-else-if="product.subcategory_id === 7">
            <brosur @send="receive"></brosur>          
          </div>   
          <div v-else-if="product.subcategory_id === 8">
            <stiker @send="receive"></stiker>          
          </div>
          <div v-else-if="product.subcategory_id === 9">
            <poster @send="receive"></poster>          
          </div>
          <div v-else-if="product.subcategory_id === 10">
            <goodle-bag @send="receive"></goodle-bag>          
          </div>
          <div v-else-if="product.subcategory_id === 11">
            <mug @send="receive"></mug>          
          </div>
          <div v-else-if="product.subcategory_id === 12">
            <bantal @send="receive"></bantal>          
          </div>
          <div v-else-if="product.subcategory_id === 13">
            <spanduk @send="receive"></spanduk>          
          </div>
          <div v-else-if="product.subcategory_id === 14">
            <x-banner @send="receive"></x-banner>          
          </div>
          <div v-else-if="product.subcategory_id === 15">
            <roll-banner @send="receive"></roll-banner>          
          </div>
          <div v-else-if="product.subcategory_id === 16">
            <kaos @send="receive"></kaos>          
          </div>
          <div v-else-if="product.subcategory_id === 17">
            <polo-shirt @send="receive"></polo-shirt>          
          </div>
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
import Test from './form/test'
import KartuNama from './form/KartuNama'
import SquareCard from './form/SquareCard'
import Amplop from './form/Amplop'
import KopSurat from './form/KopSurat'
import Stempel from './form/Stempel'
import Kalender from './form/Kalender'
import Brosur from './form/Brosur'
import Stiker from './form/Stiker'
import Poster from './form/Poster'
import GoodleBag from './form/Googdelbag'
import Mug from './form/Mug'
import Bantal from './form/Bantal'
import Spanduk from './form/Spanduk'
import XBanner from './form/XBanner'
import RollBanner from './form/RollBanner'
import Kaos from './form//Kaos'
import PoloShirt from './form/PoloShirt'
export default {
  components: {
    StarRating,
    Test,
    KartuNama,
    SquareCard,
    Amplop,
    KopSurat,
    Stempel,
    Kalender,
    Brosur,
    Stiker,
    Poster,
    GoodleBag,
    Mug,
    Bantal,
    Spanduk,
    XBanner,
    RollBanner,
    Kaos,
    PoloShirt
  },
  data () {
    return {
      test: '',
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
        kaos_metode: '',
        nama: '',
        nama_perusahaan: '',
        no_telpon: '',
        alamat: '',
        email: '',
        jabatan: '',
        material: '',
        logo: ''
      }
    }
  },
  computed: {

    // test () {
    //   this.form.product_id = parseInt(this.$route.params.id)
    //   this.form.kuantitas = this.item.kuantitas.text
    //   this.form.jenis_kertas = this.item.jenis_kertas.text
    //   this.form.model = this.item.model.text
    //   this.form.kain = this.item.kain.text
    //   this.form.ukuran = this.item.ukuran.text
    //   this.form.warna = this.item.warna.text
    //   this.form.jenis_cetak = this.item.jenis_cetak.text
    //   this.form.bahan = this.item.bahan.text
    //   this.form.sisi = this.item.model.sisi
    //   this.form.jilid = this.item.jilid.text
    //   this.form.lembar = this.item.lembar.text
    //   this.form.cetak_depan = this.item.cetak_depan.text
    //   this.form.cetak_belakang = this.item.cetak_belakang.text
    //   this.form.cetak_lengan_kanan = this.item.cetak_lengan_kanan.text
    //   this.form.cetak_lengan_kiri = this.item.cetak_lengan_kiri.text
    //   this.form.kaos_metode = this.item.kaos_metode.text
    //   return this.form
    // },
    product () {
      console.log(this.form.cart_id, 'CARTID')
      return this.$store.getters.productDetail
    }
  },
  created () {
    this.$store.dispatch('getProduct', this.$route.params.id)
  },
  methods: {
    receive (item) {
      // console.log(item, 'parent')
      this.form.product_id = parseInt(this.$route.params.id)
      this.form.kuantitas = item.kuantitas.text
      this.form.jenis_kertas = item.jenis_kertas.text
      this.form.model = item.model.text
      this.form.kain = item.kain.text
      this.form.ukuran = item.ukuran.text
      this.form.warna = item.warna.text
      this.form.jenis_cetak = item.jenis_cetak.text
      this.form.bahan = item.bahan.text
      this.form.sisi = item.model.sisi
      this.form.jilid = item.jilid.text
      this.form.lembar = item.lembar.text
      this.form.cetak_depan = item.cetak_depan.text
      this.form.cetak_belakang = item.cetak_belakang.text
      this.form.cetak_lengan_kanan = item.cetak_lengan_kanan.text
      this.form.cetak_lengan_kiri = item.cetak_lengan_kiri.text
      this.form.kaos_metode = item.kaos_metode.text
      this.form.nama = item.nama
      this.form.nama_perusahaan = item.nama_perusahaan
      this.form.no_telpon = item.no_telpon
      this.form.alamat = item.alamat
      this.form.email = item.email
      this.form.jabatan = item.jabatan
      this.form.material = item.material
      this.form.logo = item.logo
      console.log(this.form, 'form')
    },
    addItem () {
      // console.log(this.$session.get('token'), 'wewe')
      if (this.form.kuantitas !== 0) {
        console.log(this.form.ukuran)
        this.$store.dispatch('addToCart', this.form)
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


