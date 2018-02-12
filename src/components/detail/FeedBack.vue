<template> 
  <transition name="fade" mode="out-in">
    <div>
      <transition name="fade" mode="out-in"  v-if="nav === 0">
        <v-container wrap class="white">
          <v-layout justify-end align-start>
            <v-flex md4 class="text-xs-right">
              <v-btn flat class="primary white--text" :disabled="valid" @click="form()">Tulis Ulasan Anda</v-btn>
            </v-flex>
          </v-layout>
          <v-layout v-if="!getUlasan">
            <v-flex md12 class="text-xs-center">
              <span class="grey--text">Tidak ada Ulasan</span>
            </v-flex>
          </v-layout>
          <v-layout v-else v-for="ulasan in getUlasan" :key="ulasan.id" class="pb-2">
            <v-flex md12>
              <v-card>
                <v-card-title class="grey lighten-4">
                  <div>
                    <star-rating
                      v-bind:increment="0.5"
                      v-bind:max-rating="5"
                      inactive-color="#000"
                      active-color="gold"
                      :star-size="15"
                      :rating="ulasan.rate" :read-only="true"
                      :show-rating="false"
                      class="custom-text grey lighten-4">
                    </star-rating>
                    <span class="grey--text">Oleh: {{ulasan.username}}</span>
                  </div>
                  <span>{{ulasan.judul}}</span>
                  <v-spacer></v-spacer>
                  <span class="grey--text">{{ulasan.created_at}}</span>
                </v-card-title>
                <v-card-text>
                  <p>{{ulasan.komen}}</p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        
      </transition> 
      <transition name=fade mode="out-in" v-else>
        <v-container>
        <v-layout>
          <v-flex md12>
              <v-card>
                <v-card-title>
                  <div>
                    <span class="title">Mohon Bagikan Pengalaman anda</span><br>
                    <span>Berikan Peringkat untuk produk ini:</span>
                    <star-rating
                        v-bind:increment="0.5"
                        v-bind:max-rating="5"
                        inactive-color="#000"
                        active-color="gold"
                        :star-size="25"
                        class="custom-text"
                        v-model="ulasan.rate">
                      </star-rating>
                  </div>
                </v-card-title>
                <v-card-text>
                  <div>
                    <v-label>Judul Ulasan (optional)</v-label>
                    <v-text-field v-model="ulasan.judul" solo></v-text-field>
                  </div>
                  <div class="pt-5">
                    <v-label>Judul Ulasan (optional)</v-label>
                    <v-text-field v-model="ulasan.komen" class="pt-1" box="true" multi-line textarea></v-text-field>
                    <span class="grey--text">Dengan mengirimkan ulasan ini, Saya setuju nama saya ditampilkan sebagai {{user}}</span>
                  </div>
                  <v-layout>
                    <v-flex md12 class="text-xs-right">
                      <v-btn flat class="primary" @click="send()">Kirim ulasan</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>     
          </v-flex>
        </v-layout>
        </v-container>   
      </transition> 
    </div>
</transition>
  
</template>


<script>
import StarRating from 'vue-star-rating'
export default {
  props: ['product'],
  data () {
    return {
      rating: 0,
      nav: 0,
      ulasan: {
        rate: 0,
        judul: '',
        komen: '',
        product_id: ''
      }
    }
  },
  components: {
    StarRating
  },
  methods: {
    form () {
      this.nav = 1
    },
    send () {
      this.ulasan.product_id = this.product.id
      this.$store.dispatch('setUlasan', this.ulasan)
      this.nav = 0
    }
  },
  computed: {
    valid () {
      console.log(this.getUlasan)
      if (this.getUlasan) {
        let user = this.getUlasan.find(x => x.username === this.user)
        if (user) {
          return true
        } else {
          return false
        }
      }
    },
    user () {
      return this.$store.getters.getUser.username
    },
    getUlasan () {
      return this.$store.getters.ulasan
    }
  },
  created () {
    console.log(this.product, 'created')
    this.$store.dispatch('getUlasan', this.product.id)
  }
}
</script>


<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.custom-text {
    font-weight: bold;
    font-size: 1.3em;
    padding-right: 10px;
    border-radius: 1px;
    color: #999;
    background: #fff;
}
.vue-star-rating-rating-text{
    margin-top: 1px;
  }
</style>
