<template>
  <div>
    <v-layout>
      <v-flex md1>
        <v-subheader>Jumlah pesanan </v-subheader>
      </v-flex>
      <v-flex md2>
        <v-text-field type="number" min=1 class="pt-1 pl-4" v-model="item.kuantitas.text"  single-line bottom></v-text-field>
      </v-flex>
      <v-flex md2>
        <v-subheader>rim</v-subheader>
      </v-flex>
      <v-flex md1>
        <v-subheader>Ukuran: </v-subheader>
      </v-flex>
      <v-flex md4>
        <v-select class="pt-1 pl-4" v-model="item.ukuran.text" :items="jenis[0].materials" item-text="ukuran" item-value="ukuran" single-line bottom></v-select>
      </v-flex>
    </v-layout>

     <v-layout>
      <v-flex md1>
        <v-subheader>Jenis Kertas: </v-subheader>
      </v-flex>
      <v-flex md4>
        <v-select class="pt-1 pl-4" v-model="item.jenis_kertas.text" :items="jenis[0].materials" item-text="jns_kertas" item-value="jns_kertas" single-line bottom></v-select>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex md1>
        <v-subheader>Logo: </v-subheader>
      </v-flex>
      <v-flex md2>
        <v-btn label="upload" class=" btn-file mt-4 pl-4" single-line bottom>
          <input type="file" class="upload"  @change="onChanged"/>Upload
        </v-btn>        
      </v-flex>
      <v-flex md2 class="pt-4 pl-5"> <span>{{image}}</span></v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['subcategory'],
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
      // jenis: [
      //   {
      //     text: 'Standart'
      //   },
      //   {
      //     text: 'Extra Fancy'
      //   }
      // ],
      // ukuran: [
      //   {
      //     text: 'Standart'
      //   },
      //   {
      //     text: 'Extra Fancy'
      //   }
      // ],
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
  },
  methods: {
    onChanged (e) {
      var fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0])
      this.image = e.target.files[0].name
      console.log(e.target.files[0])
      fileReader.onload = (e) => {
        this.item.logo = e.target.result
      }
    }
  },
  computed: {
    jenis () {
      console.log(this.$store.getters.materials(this.subcategory), 'mate')
      return this.$store.getters.materials(this.subcategory)
    }
  }
}
</script>
<style scoped>
.btn-file input.upload{
  width: 100%;
  height: 100%;
   position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
    
}
</style>

