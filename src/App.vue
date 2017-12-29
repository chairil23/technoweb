<template>
  <v-app class="grey lighten-4">        
    <v-toolbar app dark class="primary" dense flat fixed>
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer" class="pr-5">Technographic</router-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-xs-only">
        <v-menu open-on-hover offset-y>
          <v-btn
            flat       
            slot="activator"  
            :to="Category">         
            Category
            <v-icon left dark>keyboard_arrow_down</v-icon>
          </v-btn>
          <v-list dark class="primary">
              <v-list-tile v-for="item in menus" :key="item.title" @click="">
                <v-list-tile-title>
                  {{item.title}}
                </v-list-tile-title>
                <v-icon right small>keyboard_arrow_right</v-icon>
              </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn
          small         
          :to="register_freelancer"
          class="red">         
          Become A Freelancer
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link" class="mx-0"
          @click="item.action">
          <v-icon left dark class="mx-1">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-menu offset-y
        :close-on-content-click="false"
        :nudge-width="80"
        v-model="menu"> 
          <v-btn
            v-show="!userIsAuthenticated"
            flat
            slot="activator"
            class="mx-0">
            <v-icon left dark class="mx-1">lock_open</v-icon>
            Sign in
          </v-btn>
          <v-card light>
            <v-layout>
              <v-flex>
                 <v-form v-model="valid" ref="form" lazy-validation>
                  <v-container>
                      <v-text-field
                      label="email"
                      v-model="email"
                      :rules="rules.emailRules">
                      </v-text-field>

                      <v-text-field 
                      label="password"
                      v-model="pass"
                      :rules="rules.passwordRules">                    
                      </v-text-field>
                      <v-btn
                      block
                      @click="signin"
                      class="light">
                        Sign in
                      </v-btn>
                    </v-container>
                  </v-form>
              </v-flex>
            </v-layout>        
          </v-card>
        </v-menu>       

        <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          Logout

        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main app>
      <router-view></router-view>
    </main>
    <v-footer app class="secondary mx-0">
      <v-container class="secondary">
        <v-layout row wrap>        
          <v-flex md6>          
            <v-list class="secondary pb-5">
              <v-list-tile class="pb-4">
                <span class="headline white--text pr-2">Technographic </span><span class="headline grey--text">   web</span>
              </v-list-tile>
              <!-- <v-list-tile>
                
              </v-list-tile> -->
               <v-list-tile>
                <span class="body-1 grey--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, vel quae non fugiat sed dolores omnis mollitia ratione suscipit quos minima fuga quidem consequatur commodi, expedita odio sint quam cum.                  
                </span>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex md2>
            <v-list class="secondary">
              <v-list-tile class="tile">
                <span class="body white--text">Hubungi Kami:</span>
              </v-list-tile>
              <v-list-tile class="tile">
                <icon class="white--text" name="facebook-square"></icon>
                <span class="body-1 grey--text pl-1">Facebook</span>
              </v-list-tile>
                <v-list-tile class="tile">
                <icon class="white--text" name="whatsapp"></icon>
                <span class="body-1 grey--text pl-1">089211452234</span>
              </v-list-tile>
                <v-list-tile class="tile">
                <icon class="white--text" name="instagram"></icon>
                <span class="body-1 grey--text pl-1">@rezatkc</span>
              </v-list-tile>
                <v-list-tile class="tile">
                <icon class="white--text" name="envelope"></icon>
                <span class="body-1 grey--text pl-1">email@gmail.com</span>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex md4>
            <v-list class="secondary">
              <v-list-tile>
                <span class="body white--text">
                  Berlangganan Newsletter
                </span>
              </v-list-tile>
              <v-list-tile>
                <span class="body-1 grey--text">Masukkan alamat email kamu untuk berbagai update, promo,dan inspirasi dari kami.</span>
              </v-list-tile>
              <v-list-tile class="tile email">
                <v-container class="pt-1">
                  <v-layout>
                    <v-flex md8>
                      <v-text-field solo class="mt-1"></v-text-field>
                    </v-flex>
                    <v-flex md4>
                      <v-btn large class="grey">
                        <span class="text subscribe">Subscribe</span>
                      </v-btn>
                    </v-flex> 
                  </v-layout>                                   
                </v-container>
              </v-list-tile>
            </v-list>
          </v-flex>
      </v-layout>
      <v-layout>
        
      </v-layout>
      </v-container>  
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      menus: [
        {title: 'Kartu Nama'},
        {title: 'Office Stationer'},
        {title: 'Marketing Material'},
        {title: 'Promotional Gift'},
        {title: 'Banner'},
        {title: 'Clothings'}
      ],
      userIsAuthenticated: false,
      menu: false,
      valid: true,
      rules: {
        emailRules: [
          /* eslint-disable */ 
          (v) => !!v || 'email is Required',
          (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Invalid e-mail.'
        ],
        passwordRules: [
          (v) => !!v || 'password is required',
          (v) => v && v.length >= 6 || 'at least 6 character'
        ]         
      },
      email: '',
      pass: ''
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        {icon: 'shopping_cart', title: 'Cart', link: '/cart', action: ''},
        {icon: 'person_add', title: 'Sign up', link: '/signup', action: ''}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          {icon: 'shopping_cart', title: 'Cart', link: '/chart'},
          {icon: 'person', title: 'Account', link: '/signup'}
        ]
      }
      return menuItems
    },
    navigation () {
      let navItems = [
        {icon: 'arrow_drop_down', title: 'Category', link: ''}
      ]
      if (this.userIsAuthenticated) {
        navItems = [
          {icon: 'arrow_drop_down', title: 'Category', link: ''},
          {icon: null, title: 'Become A Freelancer', link: ''}
        ]
        return navItems
      }
    }
  },
  methods: {
    signin () {

      if(this.$refs.form.validate()){
        this.userIsAuthenticated = true
        console.log(this.userIsAuthenticated)
      }
    },
    onLogout () {
      this.userIsAuthenticated = false
      console.log(this.userIsAuthenticated)
    }
  }
}
</script>
<style scoped>

.footer > *:last-child {
    margin-right:92px;
}

.footer > *:first-child {
    margin-left: 92px;
}
.text.subscribe{
  color: rgb(94, 92, 92);
  text-transform: capitalize;
}
.tile {
  height: 30px;
}

</style>


