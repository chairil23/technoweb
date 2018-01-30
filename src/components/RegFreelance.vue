<template>
  <v-container>
    <v-form v-model="valid" ref="form" lazy-validation>          
      <v-card color="grey lighten-4" flat>
        <v-card-text>
          <v-container fluid>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>User Name</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-1"
                  v-model="user.username"
                  :rules="[v => !!v || 'required']"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Email</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-2"
                  class="input-group--focused"
                  v-model="user.email"
                  :rules="[v => !!v || 'required']"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Jenis Kelamin</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-radio-group class="pt-2" v-model="kelamin" row :rules="[v => !!v || 'required']">
                  <v-radio color="primary" label="Pria" value="1"></v-radio>
                  <v-radio color="primary" label="Wanita" value="0"></v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>No. Ponsel</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3"
                  v-model="user.phone"
                  :rules="[v => !!v || 'required']"
                ></v-text-field>
              </v-flex>
            </v-layout>
             <v-layout row>
              <v-flex xs4>
                <v-subheader>Rekening Bank</v-subheader>
              </v-flex>
              <v-flex xs8>
                  <v-text-field
                  name="input-3"
                  v-model="rek_bank"
                  :rules="[v => !!v || 'required']"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
            <v-btn
                      @click="submit"
                      :disabled="!valid"
                      class="dark"
                      tabindex="6"
                      >
                      submit
                      </v-btn>
        </v-card-text>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>
import {post} from '../helper/api'
export default {
  data () {
    return {
      valid: true,
      rek_bank: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    kelamin () {
      return String(this.user.gender)
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        let bank = {
          no_rekening: this.rek_bank
        }
        post('/freelance', bank).then((res) => {
          if (res.status === 200) {
            console.log('sukses')
          }
        }).catch((err) => {
          if (err) {
            console.log(err)
          }
        })
        // this.$store.dispatch('regFreelance')
      }
    }
  }
}
</script>

