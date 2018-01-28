<template>
  <div>
    <v-text-field v-model="text">

    </v-text-field>   
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  watch: {
    text () {
      console.log(this.text)
      this.$emit('click', this.text)
    }
  }
}
</script>

