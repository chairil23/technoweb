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
                  <a color primary dark slot="activator">Ubah</a>
                  <v-card>
                    <v-form lazy-validation ref ="form" v-model="valid">
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
                              <v-text-field class="pt-0" required v-model="alamat"></v-text-field>
                            </v-flex>
                          </v-layout>
                          <v-layout>
                            <v-flex md3>
                              <v-subheader>Provinsi</v-subheader>
                            </v-flex>
                            <v-flex md5>
                              <v-select class="pt-0"></v-select>
                            </v-flex>
                          </v-layout>
                          <v-layout>
                            <v-flex md3>
                              <v-subheader>Kota/Kabupaten</v-subheader>
                            </v-flex>
                            <v-flex md5>
                              <v-select class="pt-0"></v-select>
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
                <span>Chairil Azmi</span>
              </v-flex>
            </v-layout>
             <v-layout>
              <v-flex>
                <span>Jl. Perwira 2 no. 90 G. Krakatau Ujung</span>
              </v-flex>
            </v-layout>
             <v-layout>
              <v-flex>
                <span>Sumatera Utara -- Kota Medan</span>
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
      alamat: ''
    }
  },

  methods: {
    simpan () {
    }
  }
}
</script>
