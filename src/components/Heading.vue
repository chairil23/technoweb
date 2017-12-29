<template>
  <v-container class="white">
    <v-layout>
    <v-flex>
      <h2>{{header}}</h2>
    </v-flex>
  </v-layout>        
  <v-layout>
    <v-flex>
      <span class="subheading">1 Produk</span>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['header']
}
</script>
 
