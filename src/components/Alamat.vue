<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-title class="pb-1">
            <v-layout>
              <v-flex md10 class="pa-0">
                <strong>Alamat Pengiriman</strong>
              </v-flex>
              <v-flex md2 class="pa-0 text-xs-right">
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <a v-if="alamat" color primary dark slot="activator">Ubah</a>
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
          </v-card-title>
          <v-card-text>
            <v-layout>
              <v-flex>
                <span>{{user.username}}</span>
              </v-flex>
            </v-layout>
             <v-layout>
              <v-flex>
                <span>{{address.address}}</span>
              </v-flex>
            </v-layout>
             <v-layout>
              <v-flex>
                <span>{{address.province}} -- {{address.type}} {{address.city_name}}</span>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      dialog: false,
      alamat: {
        address: '',
        provinsi: '',
        kota: ''
      }
    }
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
  },
  created () {
    this.$store.dispatch('getProvinsi')
    this.$store.dispatch('getAlamat')
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    kota () {
      console.log(this.prov)
      return this.$store.getters.kota
    },
    provinsi () {
      return this.$store.getters.provinsi
    },
    address () {
      return this.$store.getters.alamat
    }
  },
  watch: {
    // prov () {
    //   this.getKota(this.prov.id)
    // }
  }
}
</script>
