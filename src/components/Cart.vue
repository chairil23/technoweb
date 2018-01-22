<template>
  <v-container grid-list-md class="white">
    <v-layout>
      <v-flex>  
        <v-layout>
          <v-container>
            <v-data-table
              v-bind:headers="headers"
              v-bind:items="items"
              v-model="selected"
              item-key="id"
              select-all
              class="elevation-1"
              hide-actions
            >
              <template slot="headerCell" slot-scope="props">                
                <span slot="activator">
                  {{ props.header.text }}
                </span>                
              </template>
              <template slot="items" slot-scope="props">
                <td>
                  <v-checkbox
                    primary
                    v-model="props.selected"
                  ></v-checkbox>
                </td>

                <td>
                  <v-container>
                    <v-layout>
                      <v-flex md4>
                        <img class="image_produk" :src="base + props.item.images" alt="image">
                      </v-flex>
                      <v-flex md8>
                        <span class="body-2 title-produk pl-1">{{props.item.jdl_Pdk}}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </td>         
                <td class="text-xs-right body-1">{{ props.item.harga_awal | currency}} </td>
                <td class="text-xs-right body-1">{{ props.item.kuantitas }}</td>
                <td class="text-xs-right body-1">{{ total(props.item.kuantitas, props.item.harga_awal) | currency}}</td>
                <td>
                  <v-layout>
                    <v-flex class="text-xs-right">
                      <a :key="props.item.id" @click="del(props.item.id)">
                        <v-icon>close</v-icon>
                      </a>
                    </v-flex>
                  </v-layout>
                </td>
              </template>               
            </v-data-table>
            

          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Heading from './Heading'

export default {
  components: {
    Heading
  },
  props: ['items', 'checkout'],
  data () {
    return {
      base: 'http://localhost:8000/uploads/',
      search: '',
      btn: [],
      selected: [],
      headers: [
        {
          text: 'Produk',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Harga', sortable: false, value: 'harga' },
        { text: 'Kuantitas', sortable: false, value: 'kuantitas' },
        { text: 'Total Harga', sortable: false, value: 'total' }
      ]
      // items: [
      //   {
      //     name: 'X-Banner',
      //     harga: 50000,
      //     kuantitas: 5,
      //     total: 250000,
      //     value: false
      //   },
      //   {
      //     name: 'Spanduk',
      //     harga: 50000,
      //     kuantitas: 5,
      //     total: 250000,
      //     value: false
      //   },
      //   {
      //     name: 'Spanduk',
      //     harga: 50000,
      //     kuantitas: 5,
      //     total: 250000,
      //     value: false
      //   },
      //   {
      //     name: 'Spanduk',
      //     harga: 50000,
      //     kuantitas: 5,
      //     total: 250000,
      //     value: false
      //   },
      //   {
      //     name: 'Spanduk',
      //     harga: 50000,
      //     kuantitas: 5,
      //     total: 250000,
      //     value: false
      //   }
      // ]
    }
  },
  methods: {
    del (item) {
      this.$store.dispatch('delItem', item)
      // for (let i = 0; this.items.length; i++) {
      //   if (this.items[i].name === item) {
      //     this.items.splice(i, 1)
      //   }
      // }
    },
    total (kuantitas, harga) {
      return kuantitas * harga
    }
  },
  computed: {
    // items () {
    //   return this.$store.getters.cart.items
    // }
  },
  watch: {
    selected () {
      this.$store.dispatch('setTemp', this.selected)
    }
  }
}
</script>
<style scoped>
.title-produk{
  text-transform: capitalize;
}

.image_produk{
  height: 5em;
}

.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: middle;
    border-top: 1px solid #ddd;
}
</style>


