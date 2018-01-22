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
                 <v-btn color="primary" @click.native="e1 = 2" :disabled="!valid">Checkout</v-btn>
              </v-flex>
            </v-layout>        
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card color="white" class="mb-5">
            <pengiriman class="pb-4"></pengiriman>
            <v-divider class=""></v-divider>
            <heading :header="header_pengiriman" class="pt-5"></heading>
            <cart :checkout="true" :items="checkout" class="pb-4"></cart>
            <v-divider></v-divider>
            <v-layout>
              <v-flex class="white py-4 pl-3">
                <span class="green--text title">Pengiriman Melalui: POS Indonesia</span>
              </v-flex>              
            </v-layout>
          </v-card>
         <v-layout>
              <v-flex md6> 
                <v-btn flat @click.native="e1 = 1">Kembali</v-btn>
              </v-flex>
              <v-flex md6 class="text-xs-right">
                 <v-btn color="primary" @click.native="e1 = 3">Buat Pesanan</v-btn>
              </v-flex>
            </v-layout>  
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card color="white" class="mb-5">
            <konfirmasi-pembayaran></konfirmasi-pembayaran>
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
      selected: []
    }
  },
  computed: {
    valid () {
      if (this.temp.length !== 0) {
        return true
      } else {
        return false
      }
    },
    carts () {
      this.$store.dispatch('delCheckout')
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
  }
}
</script>

