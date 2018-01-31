<template>
 <v-container>
    <div>
    <form @submit.prevent="create">
      <div class="form-group">
        <label>Name: </label>
        <input type="file" class="form-control" @change="imageChanged">
      
      </div>
    </form>
  </div>
 </v-container>
</template>

<script>
export default {
  data () {
    return {
      product: {
        images: ''
      }
    }
  },
  methods: {
    imageChanged (e) {
      console.log(e.target.files[0])
      var fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0])
      // fileReader.onload = (e) => {
      //   this.product.images = 'e.target.result'
      // }
      fileReader.onload = (e) => {
        this.product.images = e.target.result
      }
      console.log(this.product)
    }
  }
}
</script>
