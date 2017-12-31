<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-layout>
          <v-flex>
            <strong>Informasi Pribadi</strong>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text>
        <v-layout>
          <v-flex md2>
            <v-subheader>Email</v-subheader>
          </v-flex>
          <v-flex md3 class="email">
            <span class="subheading pr-4">{{email}}</span>        
          </v-flex>
          <v-flex md2 class="email">
            <v-dialog v-model="dialogEmail" persistent max-width="500px">
              <a color primary dark slot="activator">Ubah email</a>
              <v-card>
                <v-form lazy-validation ref ="form" v-model="valid">
                  <v-card-title>
                    <span class="headline">Ubah Email</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex md3>
                          <v-subheader>Email Lama</v-subheader>
                        </v-flex>
                        <v-flex>
                          <v-subheader class="subheading">{{email}}</v-subheader>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex md3>
                          <v-subheader>Email Baru</v-subheader>
                        </v-flex>
                        <v-flex>
                          <v-text-field class="pt-0" :rules="rules.email" v-model="inputEmail"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" flat @click.native="dialogEmail = false">Batal</v-btn>
                    <v-btn color="primary" flat @click="simpanEmail" :disabled="!valid">Simpan</v-btn>
                  </v-card-actions>
                </v-form>
              
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md2>
            <v-subheader>Nomor Ponsel</v-subheader>        
          </v-flex>
          <v-flex md3 class="email"> 
            <span class="subheading pr-4">{{ponsel}}</span>        
          </v-flex>
          <v-flex md-2 class="email">
            <v-dialog v-model="dialogPonsel" persistent max-width="500px">
              <a color primary dark slot="activator">Ubah </a>
              <v-card>
                <v-form>
                  <v-card-title>
                    <span class="headline">Ubah No. Ponsel</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex md3>
                          <v-subheader>No Lama</v-subheader>
                        </v-flex>
                        <v-flex>
                          <v-subheader class="subheading">{{ponsel}}</v-subheader>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex md3>
                          <v-subheader>No Baru</v-subheader>
                        </v-flex>
                        <v-flex>
                          <v-text-field class="pt-0" :mask="fponsel" v-model="inputPonsel" required></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" flat @click.native="dialogPonsel = false">Batal</v-btn>       
                    <v-btn color="primary" flat @click="simpanNo" >Simpan</v-btn>         
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md2>
            <v-subheader>Jenis Kelamin</v-subheader>
          </v-flex>
          <v-flex md3>
            <v-radio-group class="pt-2" v-model="jkelamin" row>
              <v-radio color="primary" label="Pria" value="1"></v-radio>
              <v-radio color="primary" label="Wanita" value="2"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md2>
            <v-subheader>Tanggal Lahir</v-subheader>
          </v-flex>
        <v-flex md2>
          <v-text-field class="pt-0" :mask="fLahir" v-model="tLahir" hint="dd-mm-yyyy"></v-text-field>
        </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
    
    
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      fLahir: '##-##-####',
      tLahir: '',
      jkelamin: '1',
      fponsel: '####-####-####-#',
      valid: true,
      valid1: false,
      email: 'chairil.azmi.ca@gmail.com',
      inputEmail: '',
      ponsel: '',
      inputPonsel: '',
      dialogEmail: false,
      dialogPonsel: false,
      rules: {
        email: [
          /* eslint-disable */ 
          (v) => !!v || 'email is Required',
          (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Invalid e-mail.'
        ]
      }
    }
  },
  methods: {
    simpanEmail () { 
      if (this.$refs.form.validate()) {
        this.dialogEmail = false
        this.email = this.inputEmail 
        this.inputEmail = ''
      }           
    },
    simpanNo () {
      if (this.inputPonsel !== '') {
        this.dialogPonsel = false
        this.ponsel = this.inputPonsel
        this.inputPonsel = ''
      }
    }
  }
}
</script>

<style scoped>
.email {
  padding-top: 12px
}
</style>


