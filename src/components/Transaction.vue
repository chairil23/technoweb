<template>
  <v-container class="mt-5">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="e1 > 1">Checkout</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="e1 > 2">Buat Pesanan</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Pembayaran</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card color="white" class="mb-5">             
            <heading :header="header_cart"></heading>     
            <cart :checkout="false" :items="carts"></cart>
          </v-card>          
            <v-layout class="pb-5 mb-3">
              <v-flex md9 class="text-xs-right">
                <strong class="title pr-3">Total Harga: </strong>
              </v-flex>
              <v-flex md class="text-xs-left">
                <strong class="title pl-4">{{totalHarga | currency}}</strong>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex md6> 
                <v-btn flat>Cancel</v-btn>
              </v-flex>
              <v-flex md6 class="text-xs-right">
                 <v-btn color="primary" @click.native="btnCheckout" :disabled="!valid">Checkout</v-btn>
              </v-flex>
            </v-layout>        
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card color="white" class="mb-5">
            <pengiriman class="pb-4"></pengiriman>
            <v-divider class=""></v-divider>
            <heading :header="header_pengiriman" class="pt-5"></heading>
            <cart :checkout="true" :items="checkout" class="pb-4"></cart>
            <v-layout class=" ">
              <v-flex md8 class="text-xs-right pb-2">
                <strong class="title pr-3">Total Harga Produk: </strong>
              </v-flex>
              <v-flex md3 class="text-xs-right">
                <strong class="title">{{totalHarga | currency}}</strong>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout>
              <v-flex md2 class="white py-0 pl-3">
                <span class="green--text title">Pengiriman Melalui: </span>
              </v-flex>    
              <v-flex md3>
                <v-select  
                  :items="items" 
                  v-model="kurir" 
                  item-text="name" 
                  item-value="code" 
                  overflow
                  required
                  @input="getKurir(kurir)"
                >
                </v-select>
              </v-flex>
                 <v-flex md2>
                <v-select  
                  :items="jKurir" 
                  v-model="service" 
                  item-text="service" 
                  item-value="item" 
                  overflow
                  required
                >
                  <template slot="item" slot-scope="data">
                    <span 
                      close
                    >
                      {{data.item.description}} ({{data.item.service}})
                    </span>
                  </template>
                </v-select>
              </v-flex> 
              <v-flex md1 class="text-xs-right  py-3">
                <strong class="body-1">{{hari}} hari</strong>
              </v-flex> 
              <v-flex md3 class="text-xs-right  py-3">
                <strong class="title">{{service.cost[0].value | currency}}</strong>
              </v-flex>            
            </v-layout>
            <v-divider class="mt-0"></v-divider>
            <v-layout class="pb-4">
              <v-flex md8 class="text-xs-right">
                <strong class="title pr-3">Total Biaya: </strong>
              </v-flex>
              <v-flex md3 class="text-xs-right">
                <strong class="title pl-4">{{tBiaya | currency}}</strong>
              </v-flex>
            </v-layout>
          </v-card>
         <v-layout>
              <v-flex md6> 
                <v-btn flat @click="btnBack">Kembali</v-btn>
              </v-flex>
              <v-flex md6 class="text-xs-right">
                 <v-btn color="primary" @click="order">Buat Pesanan</v-btn>
              </v-flex>
            </v-layout>  
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card color="white" class="mb-5">
            <konfirmasi-pembayaran :data="transaction"></konfirmasi-pembayaran>
          </v-card>
          <v-layout>
              <v-flex md12 class="text-xs-center">
                 <v-btn color="primary" @click.native="e1 = 1">Selesai</v-btn>
              </v-flex>
            </v-layout>      
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import Cart from './Cart'
import Pengiriman from './Pengiriman'
import Heading from './Heading'
import KonfirmasiPembayaran from './KonfirmasiPembayaran'
export default {
  components: {
    Cart,
    Pengiriman,
    Heading,
    KonfirmasiPembayaran
  },
  data () {
    return {
      e1: 0,
      header_cart: 'Keranjang Belanja',
      header_pengiriman: 'Produk Pesanan',
      selected: [],
      items: [
        {
          code: 'tiki',
          name: 'Citra Van Titipan Kilat (TIKI)'
        },
        {
          code: 'jne',
          name: 'Jalur Nugraha Ekakurir (JNE)'
        },
        {
          code: 'pos',
          name: 'POS Indonesia (POS)'
        }
      ],
      kurir: 'jne',
      service: {
        cost: [
          {
            value: '',
            etd: '',
            note: ''
          }
        ],
        service: '',
        descriptions: ''
      }
    }
  },
  computed: {
    transaction () {
      console.log(this.$store.getters.transaction, 'trans')
      return this.$store.getters.transaction
    },
    tBiaya () {
      return this.totalHarga + this.service.cost[0].value
    },
    hari () {
      if (this.service.cost[0].etd === '1-1') {
        return '1'
      } else {
        return this.service.cost[0].etd
      }
    },
    jKurir () {
      console.log(this.$store.getters.kurir)
      return this.$store.getters.kurir
    },
    valid () {
      if (this.checkout.length !== 0) {
        return true
      } else {
        return false
      }
    },
    carts () {
      return this.$store.getters.cart.items
    },
    totalHarga () {
      let selected = this.$store.getters.temp
      console.log(selected)
      let total = 0
      selected.forEach(element => {
        total = total + (element.kuantitas * element.harga_awal)
      })
      return total
    },
    temp () {
      return this.$store.getters.temp
    },
    checkout () {
      return this.$store.getters.checkout
    }
    // totalHarga () {
    //   let items = this.$store.getters.cart.items
    //   let total = 0
    //   console.log(items, 'items')
    //   items.forEach(element => {
    //     total = total + (element.kuantitas * element.harga_awal)
    //   })
    //   return total
    // },
  },
  created () {
    this.$store.dispatch('getAlamat')
    this.$store.dispatch('getKurir', this.kurir)
    // this.$store.dispatch('setKurirNull')
  },
  methods: {
    order () {
      let kurir = {}
      kurir.name = this.kurir
      kurir.service = this.service
      this.$store.dispatch('order', kurir)
      this.e1 = 3
    },
    getKurir (kurir) {
      console.log(kurir)
      this.$store.dispatch('getKurir', kurir)
    },
    btnCheckout () {
      this.$store.dispatch('checkout')
      this.e1 = 2
    },
    btnBack () {
      this.$store.dispatch('rollback')
      this.e1 = 1
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('rollback')
    next()
  }
}
</script>

