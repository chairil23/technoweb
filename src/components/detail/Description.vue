<template>
  <v-container class="white">
    <transition name="fade" mode="out-in">
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
    </transition>
  </v-container>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


<script>
export default {
  props: ['product']
}
</script>

