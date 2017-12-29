<template>
  <v-container>
    <v-layout class="mb-3">
      <v-flex md6>
        <span class="title ">Total Pembayaran:</span>
      </v-flex>
      <v-flex md6>
        <span class="title">{{500000 | currency}}</span>
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
           <v-btn small class="pl-3">Upload</v-btn>
          <li>Pesanan akan diproses setelah melakukan pembayaran dan menunjukkan bukti pembayaran sesuai llangkah no 2</li>
          <li>Pesanan akan hilang jika tidak melakukan pembayaran dalam kurun waktu 24 jam dimulai dari pembuatan pesanan</li>
        </ol>
      </v-flex>
    </v-layout>
  </v-container>
</template>
