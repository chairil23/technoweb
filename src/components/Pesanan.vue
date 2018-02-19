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
        <td class="text-xs-left">{{ props.item.created_at }}</td>
        <td>{{ props.item.kode_invoice }}</td>
        <td class="text-xs-left">{{ props.item.address }}</td>
        <td class="text-xs-left">{{ props.item.city_name }}</td>
        <td class="text-xs-left">{{ props.item.province }}</td>
        <td class="text-xs-left">{{ total(props.item.orders, props.item.biaya_kurir) | currency }}</td>
        <td class="text-xs-left">{{ status(props.item.status_transaksi) }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-card flat>
        <v-container>
          <span class="body-1">Kurir            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; : {{props.item.kurir}} ({{props.item.service}})</span><br>
          <span class="body-1">Alamat Pengiriman &emsp;: {{props.item.address}} {{props.item.city_name}} {{props.item.province}} Indonesia</span><br>
          <span class="body-1">Biaya Kurir &emsp; &emsp; &emsp; &emsp;: {{props.item.biaya_kurir | currency}}</span>
          <v-divider></v-divider>
          <pembayaran v-show="props.item.status_transaksi !== 1" :data="props.item"></pembayaran>
          <v-data-table
              v-bind:headers="headers2"
              :items="props.item.orders"
              hide-actions
              class="elevation-1"
          >
            <template slot="items" slot-scope="props">             
              <td>{{ props.item.product.jdl_Pdk }}</td>
              <td class="text-xs-left">{{ props.item.kuantitas}}</td>
              <td class="text-xs-left">{{ harga(props.item.harga, props.item.product.harga_awal) | currency}}</td>
              <td class="text-xs-left">{{ status1(props.item.status)}}</td>
              <td class="text-xs-left" v-if="props.item.status === 2">
                <v-btn small class="primary" @click="diterima(props.item.id)">Sudah diterima</v-btn>
              </td>
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
        {text: 'Tanggal', value: 'tanggal', align: 'center', sortable: false},
        {
          text: 'Kode Invoice',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {text: 'Alamat', value: 'alamaat', align: 'center', sortable: false},
        { text: 'Kota', value: 'kota', align: 'center', sortable: false },
        { text: 'Provinsi', value: 'provinsi', align: 'center', sortable: false },
        { text: 'Total', value: 'total', align: 'center', sortable: false },
        { text: 'status', value: 'status', align: 'center', sortable: false }
      ],
      headers2: [
        {
          text: 'Nama',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Kuantitas', value: 'kuantitas', align: 'left', sortable: false },
        { text: 'harga', value: 'harga', align: 'left', sortable: false },
        { text: 'status', value: 'status', align: 'left', sortable: false }
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
    harga (harga, desain) {
      return harga + desain
    },
    diterima (id) {
      this.$store.dispatch('setDiterima', id)
    },
    status (_status) {
      if (_status === 0) {
        return 'Belum dibayar'
      } else {
        return 'Sudah dibayar'
      }
    },
    total (orders, kurir) {
      let total = 0
      orders.forEach(element => {
        total = total + ((element.product.harga_awal + element.harga) * element.kuantitas)
      })
      return total + kurir
    },
    status1 (_status) {
      console.log(_status)
      if (_status === 0) {
        return 'menunggu konfirmasi'
      } else if (_status === 1) {
        return 'sedang dalam pengerjaan'
      } else if (_status === 2) {
        return 'dalam proses pengiriman'
      } else {
        return 'Sudah diterima'
      }
    }
  }
}
</script>

