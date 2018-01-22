<template>
  <v-container class="bar pt-5" app fluid>   
    <v-alert
      :color= "color"
      :icon="icon"
      :value="alert"
      transition="scale-transition"
      
    >      
      <v-layout>
        <v-flex>
          {{message}}
        </v-flex>
        <v-flex class="text-xs-right"> 
          <v-icon @click="close">close</v-icon>
        </v-flex>
      </v-layout>
      
    </v-alert>    
  </v-container>
</template>

<script>
export default {
  props: ['color', 'icon', 'alert', 'message'],
  methods: {
    close () {
      this.$store.dispatch('null')
      this.alert = false
    }
  }
}
</script>

<style scoped>
  .bar{
    position: fixed;
    
  }
</style>

