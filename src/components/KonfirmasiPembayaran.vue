<template>
  <v-container>
    <v-layout class="mb-3">
      <v-flex md6>
        <span class="title ">Total Pembayaran:</span>
      </v-flex>
      <v-flex md6>
        <span class="title">{{total | currency}}</span>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout class="mt-3">
      <v-flex>
        <span>Mohon ikuti langkah-langkah berikut: </span>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <ol>
          <li>Pembayaran melalui transfer ke Bank Mandiri atas Nama Technographic dengan nomor Rekening 1111 231 109 231</li>
          <li>Tunjukkan bukti pembayaran dengan memfoto/menscan bukti pembayarannya dengan menguploadnya melaui tombol dibawah ini</li>
           <input type="file" @change="inputChanged" class="pl-3">
           <v-btn small @click="upload">Upload</v-btn>
          <li>Pesanan akan diproses setelah melakukan pembayaran dan menunjukkan bukti pembayaran sesuai llangkah no 2</li>
          <!-- <li>Pesanan akan hilang jika tidak melakukan pembayaran dalam kurun waktu 24 jam dimulai dari pembuatan pesanan</li> -->
        </ol>
      </v-flex>
    </v-layout>
    <v-snackbar
      timeout="6000"
      color="success"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import {post} from '../helper/api'
export default {
  props: ['data'],
  data () {
    return {
      text: '',
      snackbar: false,
      image: ''
    }
  },
  methods: {
    inputChanged (e) {
      var fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0])
      fileReader.onload = (e) => {
        this.image = e.target.result
      }
    },
    upload () {
      if (this.image) {
        let transaction = {
          id: this.$store.getters.transaction.id,
          kode_invoice: this.$store.getters.transaction.kode_invoice,
          image: this.image
        }
        post('/upload', transaction).then((res) => {
          if (res.status === 200) {
            console.log('sukses')
            // this.$router.push({path: '/'})
            this.text = 'upload Sukses'
            this.snackbar = true
          }
        }).catch((err) => {
          if (err) {
            console.log(err)
          }
        })
      }
    }
  },
  computed: {
    checkout () {
      console.log(this.$store.getters.checkout, 'peme')
      return this.$store.getters.temp
    },
    total () {
      let total = 0
      this.checkout.forEach(element => {
        total = total + ((element.harga_awal + element.harga) * element.kuantitas)
      })
      return total
    }
  }
}
</script>

