<template>
  <v-container fluid class="pt-5 mt-4"> 
    <v-layout>
      <v-flex md3>
        <v-list subheader dark>
        
            <v-subheader>Message List</v-subheader>
            <v-container 
                style="max-height: 400px"
                class="scroll-y"
                id="scroll-target"
              >
              <template v-for="(list, index) in getMessageList" class="scroll-y">
              
                <v-list-tile border :key="list.id" class="primary" @click="getMessage(list)">
                  <v-list-tile-content>
                    <v-list-tile-title class="white--text text-xs-rigth" v-html="list.jdl_Pdk">
                      
                    </v-list-tile-title>
                    <v-list-tile-action-text>freelance: {{list.freelance}}</v-list-tile-action-text>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider class="my-1" dark v-if="index + 1 < getMessageList.length" :key="list.id"></v-divider>
              </template>
            </v-container>
          
         
        </v-list>
      </v-flex>
      <v-flex md9>
        <chat :chat="chat" :list="list"></chat>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Chat from '../components/message_component/Chat'
export default {
  data () {
    return {
      list: {}
    }
  },
  components: {
    Chat
  },
  computed: {
    getMessageList () {
      console.log(this.$store.getters.message, 'message')
      return this.$store.getters.message
    },
    chat () {
      return this.$store.getters.chat
    }
  },
  methods: {
    getMessage (list) {
      this.$store.dispatch('getMessage', list.id)
      this.list = list
    }
  },
  created () {
    this.$store.dispatch('getMessageList')
  }
}
</script>

