<template>
  <v-container>
    <v-layou>
      <v-flex class="pb-4">
        <strong>Pesanan</strong>
      </v-flex>
    </v-layou>
    
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
          <pembayaran v-show="props.item.status === 0" :data="props.item"></pembayaran>
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
import Pembayaran from '../components/Pembayaran'
export default {
  components: {
    Pembayaran
  },
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

