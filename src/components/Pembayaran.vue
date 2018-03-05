<template>
    <v-layout class="pb-3">
      <v-flex  class="pl-2">
        <ol>
          <li>Pembayaran melalui transfer ke Bank Mandiri atas Nama Technographic dengan nomor Rekening 1111 231 109 231</li>
          <li>Tunjukkan bukti pembayaran dengan memfoto/menscan bukti pembayarannya dengan menguploadnya melaui tombol dibawah ini</li>
          <form>
            <div class="form-group">
              <input type="file" @change="inputChanged">
            
            </div>
          </form>
        
          <v-btn small @click="upload">Upload</v-btn>
          <li>Pesanan akan diproses setelah melakukan pembayaran dan menunjukkan bukti pembayaran sesuai llangkah no 2</li>
          <!-- <li>Pesanan akan hilang jika tidak melakukan pembayaran dalam kurun waktu 24 jam dimulai dari pembuatan pesanan</li> -->
        </ol>
      </v-flex>
    </v-layout>
  </template>

<script>
import {post} from '../helper/api'
export default {
  props: ['data'],
  data () {
    return {
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
      console.log('pload', this.image)
      if (this.image) {
        let transaction = {
          id: this.data.id,
          kode_invoice: this.data.kode_invoice,
          image: this.image
        }
        post('/upload', transaction).then((res) => {
          if (res.status === 200) {
            console.log('sukses')
          }
        }).catch((err) => {
          if (err) {
            console.log(err)
          }
        })
      }
    }
  }
}
</script>
  