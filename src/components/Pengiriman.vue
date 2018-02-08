<template>
  <v-container class="white">
    <v-layout>
      <v-flex class="mb-4">
        <span class="subheading heading">Alamat Pengiriman</span>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md2>
        <span class="body-2 heading">{{user.username}}</span>
      </v-flex>
      <v-flex md2 class="pl-4">
        <span class="body-2 heading">{{user.phone}}</span>
      </v-flex>
      <v-flex md8 class="pl-4">
       <span class="body-2"> {{address.address}}, {{address.type}} {{address.city_name}} , {{address.province}}, ID {{address.postal_code}}</span>
       <v-dialog v-model="dialog" persistent max-width="600px">
          <a v-if="address.address" color primary dark slot="activator" class="pl-5">Ubah</a>
          <a v-else color primary dark slot="activator">Masukkan Alamat</a>
          <v-card>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-card-title>
                <span class="headline">Ubah Alamat</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout>
                    <v-flex md3>
                      <v-subheader>Alamat Baru</v-subheader>
                    </v-flex>
                    <v-flex>
                      <v-text-field class="pt-0" 
                        required 
                        v-model="alamat.address"
                        :rules="[v => !!v || 'required']"
                      >
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex md3>
                      <v-subheader>Provinsi</v-subheader>
                    </v-flex>
                    <v-flex md5>
                      <v-select class="pt-0" :items="provinsi" 
                        v-model="alamat.provinsi" 
                        item-text="province" 
                        item-value="item" 
                        @input="getKota(alamat.provinsi.province_id)" 
                        overflow
                        autocomplete
                        :rules="[v => !!v || 'required']"
                        required
                      >
                        <template slot="item" slot-scope="data">
                          <span 
                            close
                            @input="getKota(data.item.province_id)"
                          >
                            {{data.item.province}}
                          </span>
                        </template>
                      </v-select>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex md3>
                      <v-subheader>Kota/Kabupaten</v-subheader>
                    </v-flex>
                    <v-flex md5>
                      <v-select class="pt-0" 
                        :items="kota" 
                        v-model="alamat.kota" 
                        item-value="item" 
                        item-text="city_name" 
                        overflow
                        autocomplete
                        :rules="[v => !!v || 'required']"
                        required
                      >
                      </v-select>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" flat @click.native="dialog = false">Batal</v-btn>
                <v-btn color="primary" flat @click="simpan" :disabled="!valid">Simpan</v-btn>
              </v-card-actions>
            </v-form>
          
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      alamat: {
        address: '',
        provinsi: '',
        kota: ''
      }
    }
  },
  computed: {
    kota () {
      console.log(this.prov)
      return this.$store.getters.kota
    },
    provinsi () {
      return this.$store.getters.provinsi
    },
    user () {
      return this.$store.getters.getUser
    },
    address () {
      console.log(this.$store.getters.alamat)
      return this.$store.getters.alamat
    }
  },
  created () {
    this.$store.dispatch('getProvinsi')
    this.$store.dispatch('getAlamat')
  },
  methods: {
    simpan () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('setAlamat', this.alamat)
        this.dialog = false
      }
    },
    getKota (id) {
      console.log(id)
      this.$store.dispatch('getKota', id)
    },
    regional (type, kota) {
      return type + ' ' + kota
    }
  }
}
</script>


<style scoped>
.heading{
  font-weight: bold
}
</style>

