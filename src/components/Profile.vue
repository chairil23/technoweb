<template>
  <v-container class="mt-5">
    <v-layout>
      <v-flex class="mb-2">
        <strong>{{user.username}}</strong>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md3>
        <ul class="pt-3">          
          <li class="pb-2" v-for="m in menu" :key="m.text">
            <v-layout>
              <router-link :to="{name: m.link }">{{m.text}}</router-link>
            </v-layout>
          </li>
          <li v-if="user.role === 2">
            <v-layout>
              <a href="http://127.0.0.1:8000/freelance">Freelance</a>
            </v-layout>
          </li>
        </ul>
      </v-flex>
      <v-flex md9 class="pt-0">
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      // menu: [
      //   {text: 'Informasi Pribadi', link: 'Informasi', value: false},
      //   {text: 'Pesanan', link: 'Pesanan'},
      //   // {text: 'Whishlist', link: 'Wishlist'},
      //   {text: 'Alamat', link: 'Alamat'},
      //   {text: 'Menjadi Freelance Designer', link: 'Freelance'}
      // ]
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    menu () {
      let menuItems = [
        {text: 'Informasi Pribadi', link: 'Informasi', value: false},
        {text: 'Pesanan', link: 'Pesanan'},
        {text: 'Alamat', link: 'Alamat'},
        {text: 'Menjadi Freelance Designer', link: 'Freelance'}
      ]
      if (this.user.role === 2) {
        menuItems = [
          {text: 'Informasi Pribadi', link: 'Informasi', value: false},
          {text: 'Pesanan', link: 'Pesanan'},
          {text: 'Alamat', link: 'Alamat'}
        ]
      }
      return menuItems
    }
  },
  created () {
    this.$store.dispatch('getTransaction')
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

li a{
  color: rgb(137, 137, 245);
  text-decoration: none;
}

</style>


