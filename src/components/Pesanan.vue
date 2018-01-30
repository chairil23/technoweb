<template>
  <v-container>
    <v-layou>
      <v-flex class="pb-4">
        <strong>Pesanan</strong>
      </v-flex>
    </v-layou>
    <!-- <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step step="1" editable complete>Sedang dikerjakan</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" editable complete>Sedang dikirim</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" editable complete>Sudah di terima</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card color="grey lighten-1" class="mb-5" height="200px">
            <v-list three-line>
              <template v-for="item in transaction">
                <v-list-tile avatar v-bind:key="item.image" @click="">
                  <v-list-tile-avatar>
                    <img v-bind:src="item.avatar"/>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
          <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
          <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
          <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper> -->
    <v-data-table
      v-bind:headers="headers"
      :items="transaction"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.kode_invoice }}</td>
        <td class="text-xs-left">{{ props.item.address }}</td>
        <td class="text-xs-left">{{ props.item.city_name }}</td>
        <td class="text-xs-left">{{ props.item.province }}</td>
        <td class="text-xs-left">{{ total(props.item.orders) | currency }}</td>
        <td class="text-xs-left">{{ status(props.item.status) }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-card flat>
        <v-container>
          <v-layout class="pb-3">
          <v-flex md2 class="pl-2">
            <span class="body-1">Upload Bukti Transfer:</span>
          </v-flex>
          <v-flex md1>
            <v-btn small>Upload</v-btn>
          </v-flex>
        </v-layout>
          <v-data-table
              v-bind:headers="headers2"
              :items="props.item.orders"
              hide-actions
              class="elevation-1"
              
          >
            <template slot="items" slot-scope="props">             
              <td>{{ props.item.product.jdl_Pdk }}</td>
              <td class="text-xs-left">{{ props.item.kuantitas}}</td>
              <td class="text-xs-left">{{ props.item.product.harga_awal | currency}}</td>
              <td class="text-xs-left">{{ status1(props.item.ket)}}</td>
              <td class="text-xs-left" v-if="props.item.ket === 3">Sudah di terima</td>
            </template>
            
          </v-data-table>
        </v-container>
      </v-card>
    </template>
  </v-data-table>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Kode Invoice',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Alamat', value: 'alamaat', align: 'center'},
        { text: 'Kota', value: 'kota', align: 'center' },
        { text: 'Provinsi', value: 'provinsi', align: 'center' },
        { text: 'Total', value: 'total', align: 'center' },
        { text: 'status', value: 'status', align: 'center' }
      ],
      headers2: [
        {
          text: 'Nama',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Kuantitas', value: 'kuantitas', align: 'left' },
        { text: 'harga', value: 'harga', align: 'left' },
        { text: 'status', value: 'status', align: 'left' }
      ],
      _transaction: []
    }
  },
  computed: {
    transaction () {
      console.log(this.$store.getters.getTransaction)
      return this.$store.getters.getTransaction
    }
  },
  methods: {
    status (_status) {
      if (_status === 0) {
        return 'Belum dibayar'
      } else {
        return 'Sudah dibayar'
      }
    },
    total (orders) {
      let total = 0
      orders.forEach(element => {
        total = total + (element.product.harga_awal * element.kuantitas)
      })
      return total
    },
    status1 (_status) {
      console.log(_status)
      if (_status === 0) {
        return 'Dipending'
      } else if (_status === 1) {
        return 'Order disetujui'
      } else if (_status === 2) {
        return 'Sedang Dikerjakan'
      } else {
        return 'Dikirim'
      }
    }
  }
}
</script>

