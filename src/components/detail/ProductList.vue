<template>
  <transition name="fade" mode="out-in">
    <v-container class="white">
    
      <p >{{getProduct}}</p>
  
    </v-container> 
  </transition>   
</template>
<script>
export default {
  props: ['product'],
  computed: {
    getProduct () {
      return this.$store.getters.pFreelancer
    }
  },
  beforeMount () {
    this.$store.dispatch('getProductFreelancer', this.product.freelancer_id)
  }
}
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
