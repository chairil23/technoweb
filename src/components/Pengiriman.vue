<template>
  <v-container class="white">
    <v-layout>
      <v-flex class="mb-4">
        <span class="subheading heading">Alamat Pengiriman</span>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md2>
        <span class="body-2 heading">Chairil Azmi</span>
      </v-flex>
      <v-flex md2 class="pl-4">
        <span class="body-2 heading">089633590249</span>
      </v-flex>
      <v-flex md8 class="pl-4">
       <span class="body-2"> {{address.address}}, {{address.type}} {{address.city_name}} , {{address.province}}, ID {{address.postal_code}}</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    address () {
      console.log(this.$store.getters.alamat)
      return this.$store.getters.alamat
    },
    created () {
      this.$store.dispatch('getAlamat')
    }
  }
}
</script>


<style scoped>
.heading{
  font-weight: bold
}
</style>

