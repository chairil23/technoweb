<template>
  <v-container class="mt-5">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="e1 > 1">Name of step 1</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="e1 > 2">Name of step 2</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Name of step 3</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card color="grey lighten-1" class="mb-5">
            <cart></cart>
          </v-card>
          <v-btn color="primary" @click.native="e1 = 2">Lanjut</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
          <v-btn color="primary" @click.native="e1 = 3">Lanjut</v-btn>
          <v-btn flat @click.native="e1 = 1">Kembali</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
          <v-btn color="primary" @click.native="e1 = 1">Lanjut</v-btn>
          <v-btn flat @click.native="e1 = 2">Kembali</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

  </v-container>
</template>
<script>
import Cart from './Cart'
export default {
  components: {
    Cart
  },
  data () {
    return {
      e1: 0
    }
  }
}
</script>

