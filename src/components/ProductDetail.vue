<template>
  <v-container app grid-list-md class="pa-5">
    <v-layout row>
      <v-flex height="100px text-xs-left">
        <!-- <v-breadcrumbs class="px-0">
          <v-icon class="balck" slot="divider">keyboard_arrow_right</v-icon>
          <v-breadcrumbs-item
          v-for= "item in items"
          :key= "item.text"
          :disabled= "item.disabled"
          >
          {{item.text}}
          </v-breadcrumbs-item>
        </v-breadcrumbs> -->
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md4 class="pt-0 mt-0">
        <v-card>
          <lightbox
            album=""
            :src="image? base + '/uploads/' + image : base + '/uploads/' + product.images[0].images"
          >
              <v-card-media
                flat
                :src="image? base + '/uploads/' + image : base + '/uploads/' + product.images[0].images"
                height= "300px"
              >
              </v-card-media>
          </lightbox>
          
        </v-card>
        <tn-slider class='wrapper' :index='index' :count="4">
              <p slot='tn-prev' class='prev-icon pt-3'><v-icon >keyboard_arrow_left</v-icon></p>
              <tn-item v-for='(slide,i) in product.images' :key="slide.id" @on-item-click='clickItem(i, slide)'>
                  <div class='customed-item'>
                    <img fluid :src="base + '/uploads/' + slide.images" style="width:80px" height="60px">
                  </div>
              </tn-item>
              <p slot='tn-next' class='next-icon pt-3'><v-icon>keyboard_arrow_right</v-icon></p>
        </tn-slider>
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
                  <span class="count headline red--text">{{harga | currency}}</span>   
                </v-flex>            
              </v-layout>
            </v-flex>            
          </v-layout>           
          <v-divider></v-divider>    
          <div v-if="product.subcategory_id === 1">
            <kartu-nama :subcategory="product.subcategory_id" @send="receive"></kartu-nama>          
          </div>
           <div v-else-if="product.subcategory_id === 2">
            <square-card :subcategory="product.subcategory_id" @send="receive"></square-card>          
          </div>   
          <div v-else-if="product.subcategory_id === 3">
            <amplop :subcategory="product.subcategory_id" @send="receive"></amplop>          
          </div>   
          <div v-else-if="product.subcategory_id === 4">
            <kop-surat :subcategory="product.subcategory_id" @send="receive"></kop-surat>          
          </div>
           <div v-else-if="product.subcategory_id === 5">
            <stempel :subcategory="product.subcategory_id" @send="receive"></stempel>          
          </div>   
          <div v-else-if="product.subcategory_id === 6">
            <kalender :subcategory="product.subcategory_id" @send="receive"></kalender>          
          </div>  
          <div v-else-if="product.subcategory_id === 7">
            <brosur :subcategory="product.subcategory_id" @send="receive"></brosur>          
          </div>   
          <div v-else-if="product.subcategory_id === 8">
            <stiker :subcategory="product.subcategory_id" @send="receive"></stiker>          
          </div>
          <div v-else-if="product.subcategory_id === 9">
            <poster :subcategory="product.subcategory_id" @send="receive"></poster>          
          </div>
          <div v-else-if="product.subcategory_id === 10">
            <goodle-bag :subcategory="product.subcategory_id" @send="receive"></goodle-bag>          
          </div>
          <div v-else-if="product.subcategory_id === 11">
            <mug :subcategory="product.subcategory_id" @send="receive"></mug>          
          </div>
          <div v-else-if="product.subcategory_id === 12">
            <bantal :subcategory="product.subcategory_id" @send="receive"></bantal>          
          </div>
          <div v-else-if="product.subcategory_id === 13">
            <spanduk :subcategory="product.subcategory_id" @send="receive"></spanduk>          
          </div>
          <div v-else-if="product.subcategory_id === 14">
            <x-banner :subcategory="product.subcategory_id" @send="receive"></x-banner>          
          </div>
          <div v-else-if="product.subcategory_id === 15">
            <roll-banner :subcategory="product.subcategory_id" @send="receive"></roll-banner>          
          </div>
          <div v-else-if="product.subcategory_id === 16">
            <kaos :subcategory="product.subcategory_id" @send="receive"></kaos>          
          </div>
          <div v-else-if="product.subcategory_id === 17">
            <polo-shirt :subcategory="product.subcategory_id" @send="receive"></polo-shirt>          
          </div>
          <v-layout row>
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
      <v-flex md3 class="white pb-0 pt-2 px-0">
        <v-layout>
          <v-flex md4>
            <v-layout>  
              <v-flex class="text-xs-center ml-1"> 
                  <!-- <v-avatar size="60px" slot="activator"> -->
                    <img style="width:80px" height="70px" :src="base +'/member/' + product.photo" alt="">
                  <!-- </v-avatar>        -->
              </v-flex>   
            </v-layout>                          
          </v-flex>
          <v-flex md6> 
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
              :rating="rating" :read-only="true"
            >
            </star-rating>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md3 class="white px-0"> 
        <v-card flat tile hover class="px-0" :to="{name: 'Default'}" exact replace>
          <v-layout>          
            <v-flex class="py-5">
              <v-layout>
                <v-flex class="text-xs-center pb-0">
                  <span class="tab">
                    Description
                  </span>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>   
        </v-card>       
      </v-flex>
      <v-flex md3 class="white px-0"> 
        <v-card flat tile hover  class="px-0 py-0" :to="{name: 'feedback'}" replace>
          <v-layout>          
            <v-flex class="py-5">
              <v-layout>
                <v-flex class="text-xs-center pb-0">
                  <span class="tab">
                    Feedback
                  </span>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>   
        </v-card>       
      </v-flex>        
      <v-flex md3 class="white px-0"> 
        <v-card flat tile hover class="px-0" :to="{name: 'productlist'}" replace>
          <v-layout>          
            <v-flex class="py-5">
              <v-layout>
                <v-flex class="text-xs-center pb-0">
                  <v-icon color="primary" class="pb-0">collections</v-icon>
                  <span class="tab">
                    64 Produk
                  </span>
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
      <v-flex md3></v-flex>
      <v-flex md9>
        <router-view :product="product"></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import StarRating from 'vue-star-rating'
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
      index: 0,
      tabs: ['tab-1', 'tab-2', 'tab-3'],
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      test: '',
      // base: 'http://localhost:8000/uploads/',
      image: '',
      e1: null,
      t: null,
      j: null,
      items: [
        {text: 'Home', disabled: false},
        {text: 'Kartu Nama', disabled: false},
        {text: 'Kartu Nama 3 x 3', disabled: true}
      ],
      j1: null,
      // text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
        logo: '',
        berat: '',
        harga: '',
        subcategory_id: ''
      }
    }
  },
  computed: {
    harga () {
      console.log(this.material.harga, this.form.kuantitas, this.product.harga_awal)
      return (this.material.harga + this.product.harga_awal) * parseInt(this.form.kuantitas)
    },
    material () {
      return this.$store.getters.value
    },
    base () {
      return this.$store.getters.url
    },

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
    },
    rating () {
      return this.$store.getters.rating
    }
  },
  created () {
    this.$store.dispatch('getProduct', this.$route.params.id)
    this.$store.dispatch('getUlasan', this.$route.params.id)
    let form = {
      page: 1,
      freelancer_id: this.product.freelancer_id
    }
    this.$store.dispatch('getProductFreelancer', form)
  },
  methods: {
    clickItem (i, slide) {
      this.index = i
      this.image = slide.images
    },
    nav () {
      console.log('dfdf')
    },
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
      this.form.berat = this.material.berat
      this.form.harga = this.material.harga
      this.form.subcategory_id = this.product.subcategory_id
      console.log(this.form, 'form')
    },
    addItem () {
      // console.log(this.$session.get('token'), 'wewe')
      if (this.form.kuantitas !== 0) {
        console.log(this.form.ukuran)
        this.$store.dispatch('addToCart', this.form)
      }
    }
  },
  beforeMount () {
    console.log('before')
    this.form.product_id = parseInt(this.$route.params.id)
    this.form.kuantitas = 1
    this.form.jenis_kertas = 'Art Carton 260gr'
    this.form.model = ''
    this.form.kain = ''
    this.form.ukuran = ''
    this.form.warna = ''
    this.form.jenis_cetak = 'Laminating Doff'
    this.form.subcategory_id = this.product.subcategory_id
    this.$store.dispatch('getValue', this.form)
  }
}
</script>
<style lang="css" scoped>
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
    margin-top: 1px;
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
  .tabs--icons .tabs__bar{
    height: 102px;
  }
  .tabs__wrapper {
    position: relative;
    overflow-x: hidden;
    height: inherit;
}

.tabs__bar {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center; 
}

img {
    border: 1px solid #ddd; /* Gray border */
    border-radius: 4px;  /* Rounded border */
    padding: 5px; /* Some padding */
    width: 150px; /* Set a small width */
    float: left;
}

/* Add a hover effect (blue shadow) */
img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

.prev-icon{
  float: left;
}

.next-icon{
  float: left;
}
</style>


