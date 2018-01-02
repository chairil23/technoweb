<template>
  <v-container class="mt-5">
    <v-layout row class="pt-5">
      <v-flex xs3 order-md1/>
      <v-flex xs6 order-md2>
        <v-card>            
          <v-layout row class="black">
            <v-flex xs3 order-md1></v-flex>
            <v-flex xs6 order-md2 class="text-xs-center">
              <v-card-title>
                <h1 class="display-1 white--text pl-4">Daftar Akun</h1>  
              </v-card-title>
            </v-flex>
            <v-flex xs3 order-md3>
            </v-flex>
              
          </v-layout>
          <v-container>
            <v-layout row>                            
              <v-flex xs12 order-md2>
                <v-form v-model="valid" ref="form" lazy-validation>                                        
                  <v-text-field 
                  light 
                  label="Nama" 
                  v-model="register.name"
                  :rules="rules.name"
                  tabindex="1"
                  />

                  <v-text-field 
                  light 
                  label="Email" 
                  v-model="register.email"
                  :rules="rules.email"
                  tabindex="2"
                  />

                  <v-text-field 
                  light 
                  label="password" 
                  v-model="register.password"
                  min="6"
                  :rules="rules.password"
                  :append-icon="e1 ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (e1 = !e1)"
                  :type="e1 ? 'password' : 'text'"
                  tabindex="3"
                  />

                  <v-text-field 
                  light 
                  label="Konfirmasi Password" 
                  v-model="register.password_confirmation"
                  min="6"
                  :rules="rules.confirm"
                  :append-icon="e2 ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (e2 = !e2)"
                  :type="e2 ? 'password' : 'text'"
                  tabindex="4"
                  />  

                  <v-checkbox class="pt-5"
                  label="Do you agree?"
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  required
                  tabindex="5"
                  />

                  <v-btn
                  @click="OnSignup"
                  :disabled="!valid"
                  class="dark"
                  tabindex="6"
                  v-model="msgw"
                  >
                  submit
                  </v-btn>
                </v-form>             
              </v-flex>       
            </v-layout>
          </v-container>                       
        </v-card>
      </v-flex>
      <v-flex xs3 order-md3/>       
    </v-layout>      
    <v-layout>
      <v-flex>
        <alert :color="msg.color" :icon="msg.icon" :message="msg.msg" :alert="msg.alert"></alert>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
import {post} from '../helper/api'
export default {
  props: ['wew'],
  data () {
    return {
      valid: true,
      e1: true,
      e2: true,
    //   formSignUp: {
        first: 'sdfsdf',
    //     name: '',
    //     pass: '',
    //     email: ''
    //   },
      register: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      nameRules: [
        (v) => !!v || 'Name is required',
        /* eslint-disable */
        (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
      ],
      rules: {
        name: [
          (v) => !!v || 'Required',
          /* eslint-disable */
          (v) => v && v.length > 3 || 'Name must be less than 3 characters'
        ],
        email: [
          /* eslint-disable */ 
          (v) => !!v || 'email is Required',
          (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Invalid e-mail.'
        ],
        confirm: [
            (v) => v === this.register.password || 'password do not match',
            (v) => !!v || 'required'
        ],
        password: [
            (v) => !!v || 'password is required',
            (v) => v && v.length >= 6 || 'at least 6 character'
        ]        
      },
      checkbox: false
    }
  },
  computed: {
    msg () {
      return this.$store.getters.getMsg
    }
  },  
  methods: {
    submit () {
        if(this.$refs.form.validate()){
            this.$route.push('/')
        }
    },
    OnSignup: function () {     
      if(this.$refs.form.validate()){
          this.$store.dispatch('signUp', this.register)
        }
      
    },
    getAlert() {
      this.msg = this.$store.getters.getMsg    
      return this.msg  
    }
  }
}
</script>

