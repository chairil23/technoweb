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
              item-key="name"
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
                        <img class="image_produk" src="/static/v.png" alt="image">
                      </v-flex>
                      <v-flex md8>
                        <span class="body-2 title-produk pl-1">{{props.item.name}}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </td>         
                <td class="text-xs-right body-1">{{ props.item.harga | currency}} </td>
                <td class="text-xs-right body-1">{{ props.item.kuantitas }}</td>
                <td class="text-xs-right body-1">{{ props.item.total | currency}}</td>
                <td>
                  <v-layout>
                    <v-flex class="text-xs-right">
                      <a :key="props.item.name" @click="del(props.item.name)">
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
  data () {
    return {
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
        { text: 'Kuantitas', sortable: false, value: 'kuarntias' },
        { text: 'Total Harga', sortable: false, value: 'total' }
      ],
      items: [
        {
          name: 'X-Banner',
          harga: 50000,
          kuantitas: 5,
          total: 250000,
          value: false
        },
        {
          name: 'Spanduk',
          harga: 50000,
          kuantitas: 5,
          total: 250000,
          value: false
        },
        {
          name: 'Spanduk',
          harga: 50000,
          kuantitas: 5,
          total: 250000,
          value: false
        },
        {
          name: 'Spanduk',
          harga: 50000,
          kuantitas: 5,
          total: 250000,
          value: false
        },
        {
          name: 'Spanduk',
          harga: 50000,
          kuantitas: 5,
          total: 250000,
          value: false
        }
      ]
    }
  },
  methods: {
    del (item) {
      let index = this.items.findIndex((x) => x.name === item)
      this.items.splice(index, 1)
      // for (let i = 0; this.items.length; i++) {
      //   if (this.items[i].name === item) {
      //     this.items.splice(i, 1)
      //   }
      // }
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
</style>


