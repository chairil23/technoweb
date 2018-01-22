<template>
  <v-dialog v-model="loading"> 
     <v-progress-circular indeterminate v-bind:size="50" color="amber"></v-progress-circular>
  </v-dialog>
</template>

<script>
export default {
  props: ['loading'],
  data () {
    return {
    }
  }
}
</script>


<style lang="stylus" scoped>
  div
    text-align: center

  .progress-circular
    margin: 1rem
</style>
