<template>
  <v-app class="grey lighten-4">
    <!-- <loading :loading="loading"></loading>                 -->
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
            >         
            Category
            <v-icon left dark>keyboard_arrow_down</v-icon>
          </v-btn>
          <v-list dark class="primary">
              <v-list-tile v-for="item in categories" :key="item.title" @click="">
                <v-list-tile-title>
                  {{item.title}}
                </v-list-tile-title>
                <v-icon right small>keyboard_arrow_right</v-icon>
              </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menus"
          :key="item.title"
          :to="item.link" class="mx-0"
          @click="item.action">
          <v-badge color="cyan" v-model="item.show" left>
            <span slot="badge">{{counter}}</span>
            <v-icon left dark class="mx-1">{{ item.icon }}</v-icon>
          </v-badge>
          {{ item.title }}
        </v-btn>
        <v-menu offset-y
        open-on-hover
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
                      v-model="login.email"
                      :rules="rules.emailRules">
                      </v-text-field>

                      <v-text-field 
                      label="password"
                      v-model="login.password"
                      :append-icon="e1 ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (e1 = !e1)"
                      :type="e1 ? 'password' : 'text'"
                      :rules="rules.passwordRules">                    
                      </v-text-field>
                      <v-btn
                      block
                      @click="signIn"
                      class="light">
                        Sign In
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
          @click="signOut">
          <v-icon left dark>exit_to_app</v-icon>
          Sign Out

        </v-btn>
      </v-toolbar-items>
    </v-toolbar>    
    <main class="wew" app>
      <alert :color="msg.color" :icon="msg.icon" :message="msg.msg" :alert="msg.alert"></alert>  
      <router-view :wew="wew"></router-view>
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
                <v-container class="pt-1 pl-0">
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
// import session from './helper/session'Z
export default {
  // props: ['snackbar', 'text', 'color'],
  data () {
    return {
      wew: 'wew1',
      snackbar: false,
      e1: true,
      categories: [
        {title: 'Kartu Nama'},
        {title: 'Office Stationer'},
        {title: 'Marketing Material'},
        {title: 'Promotional Gift'},
        {title: 'Banner'},
        {title: 'Clothings'}
      ],
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
      login: {
        email: '',
        password: '' 
      }, 
    }
  },
  computed: {
    menus () {
      let menuItems = [
        {icon: 'shopping_cart', title: 'Cart', link: '/cart', action: '', show: this.show},
        {icon: 'person_add', title: 'Sign up', link: '/signup', action: '', show: false}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          {icon: 'shopping_cart', title: 'Cart', link: '/cart', show: this.show},
          {icon: 'person', title: 'Account', link: '/profile', show: false}
        ]
      }
      return menuItems
    },
    navigation () {
      let navItems = [
        {icon: 'arrow_drop_down', title: 'Category', link: '/'}
      ]
      if (this.userIsAuthenticated) {
        navItems = [
          {icon: 'arrow_drop_down', title: 'Category', link: '/'},
          {icon: null, title: 'Become A Freelancer', link: ''}
        ]
        return navItems
      }
    },
    msg () {
      return this.$store.getters.getMsg
    },
    user () {
      return this.$store.state.user
    },
    userIsAuthenticated () {      
      if (this.user.api_token === undefined) {
        return this.$session.exists()
      } else {                  
        this.$session.set('token', this.user.api_token)
        this.$store.dispatch('getCart')
        return this.$session.exists()
      }      
    },
    loading () {
      return true
      // return this.$store.getters.getLoading
    }, 
    counter () {
      if (!this.userIsAuthenticated) {
        this.$store.dispatch('delCart')
      }
      return this.$store.getters.cart.items.length  
    },
    show () {
      if (this.counter === 0) {
        return false
      } else { 
        return true
      }
      return false
    }
  },
  watch: {

  },
  created() {
    if (this.userIsAuthenticated) {
      console.log('true')
      this.$store.dispatch('getCart')
    } else {
      console.log('false')
      this.$store.dispatch('delCart')
    }
  },
  beforeCreate () {
    // this.$session.start()
    // console.log('wew')
  },
  methods: {
    signIn () {
      if(this.$refs.form.validate()){
        this.$store.dispatch('signIn', this.login)  
        console.log('signin')
      }
    },
    signOut () {
      console.log(this.$session.get('token'))
      this.$store.dispatch('userNull')
      this.$session.destroy()
      this.$router.push('/')
      console.log(this.$session.exists())
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
.wew {
  position:unset;
}

</style>


