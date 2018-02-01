<template>
  <div>
    <v-layout>
      <v-flex md1>
        <v-subheader>Jumlah pesanan (Buah): </v-subheader>
      </v-flex>
      <v-flex md4>
        <v-select class="pt-1 pl-4" v-model="item.kuantitas" :items="quantity" single-line bottom></v-select>
      </v-flex>
      <v-flex md1>
        <v-subheader>Ukuran: </v-subheader>
      </v-flex>
      <v-flex md4>
        <v-select class="pt-1 pl-4" v-model="item.ukuran" :items="ukuran" single-line bottom></v-select>
      </v-flex>
    </v-layout>

     <v-layout>
      <v-flex md1>
        <v-subheader>Material: </v-subheader>
      </v-flex>
      <v-flex md4>
        <v-select class="pt-1 pl-4" v-model="item.material" :items="material" single-line bottom></v-select>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex md1>
        <v-subheader>Logo: </v-subheader>
      </v-flex>
      <v-flex md4>
        <v-btn label="upload" class="pt-1 pl-4" v-model="item.logo" single-line bottom></v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      quantity: [
        { text: 50 },
        { text: 100 }
      ],
      lembar: [
        {text: 'ya'}
      ],
      jilid: [
        {text: 'ya'}
      ],
      warna: [
        {
          text: 'Merah'
        }
      ],
      material: [
        {
          text: 'Standart'
        },
        {
          text: 'Extra Fancy'
        }
      ],
      jenis: [
        {
          text: 'Standart'
        },
        {
          text: 'Extra Fancy'
        }
      ],
      ukuran: [
        {
          text: 'Standart'
        },
        {
          text: 'Extra Fancy'
        }
      ],
      item: {
        product_id: this.$route.params.id,
        kuantitas: {text: ''},
        jenis_kertas: {text: ''},
        model: {text: ''},
        kain: {text: ''},
        ukuran: {text: ''},
        warna: {text: ''},
        jenis_cetak: {text: ''},
        bahan: {text: ''},
        sisi: {text: ''},
        jilid: {text: ''},
        lembar: {text: ''},
        cetak_depan: {text: ''},
        cetak_belakang: {text: ''},
        cetak_lengan_kanan: {text: ''},
        cetak_lengan_kiri: {text: ''},
        kaos_metode: {text: ''},
        nama: '',
        nama_perusahaan: '',
        no_telpon: '',
        alamat: '',
        email: '',
        jabatan: '',
        material: '',
        logo: ''
      }
    }
  },
  watch: {
    'item.kuantitas.text' () {
      // console.log(this.item)
      this.$emit('send', this.item)
    },
    'item.nama' () {
      // console.log(this.item)
      this.$emit('send', this.item)
    },
    'item.nama_perusahaan' () {
      // console.log(this.item)
      this.$emit('send', this.item)
    },
    'item.jabatan' () {
      // console.log(this.item)
      this.$emit('send', this.item)
    },
    'item.no_telpon' () {
      // console.log(this.item)
      this.$emit('send', this.item)
    },
    'item.alamat' () {
      // console.log(this.item)
      this.$emit('send', this.item)
    },
    'item.email' () {
      // console.log(this.item)
      this.$emit('send', this.item)
    },
    'item.logo' () {
      // console.log(this.item)
      this.$emit('send', this.item)
    },
    'item.jenis_kertas.text' () {
      this.$emit('send', this.item)
    },
    'item.model.text' () {
      this.$emit('send', this.item)
    },
    'item.kain.text' () {
      this.$emit('send', this.item)
    },
    'item.ukuran.text' () {
      this.$emit('send', this.item)
    },
    'item.warna.text' () {
      this.$emit('send', this.item)
    },
    'item.jenis_cetak.text' () {
      this.$emit('send', this.item)
    },
    'item.bahan.text' () {
      this.$emit('send', this.item)
    },
    'item.model.sisi' () {
      this.$emit('send', this.item)
    },
    'item.jilid.text' () {
      this.$emit('send', this.item)
    },
    'item.lembar.text' () {
      this.$emit('send', this.item)
    },
    'item.cetak_depan.text' () {
      this.$emit('send', this.item)
    },
    'item.cetak_belakang.text' () {
      this.$emit('send', this.item)
    },
    'item.cetak_lengan_kanan.text' () {
      this.$emit('send', this.item)
    },
    'item.cetak_lengan_kiri.text' () {
      this.$emit('send', this.item)
    },
    'item.kaos_metode.text' () {
      this.$emit('send', this.item)
    },
    'tem.material' () {
      this.$emit('send', this.item)
    }
  }
}
</script>

