<template>
  <v-container class="white">
    <v-layout>
    <v-flex>
      <h2>{{header}}</h2>
    </v-flex>
  </v-layout>        
  <v-layout>
    <v-flex>
      <span class="subheading">{{count}} Produk</span>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['header'],
  computed: {
    count () {
      if (this.header === 'Produk Pesanan') {
        return this.$store.getters.checkout.length
      } else {
        return this.$store.getters.cart.items.length
      }
    }
  }
}
</script>
 
