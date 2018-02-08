<template>
  <v-card>
    <v-container style="max-height: 400px"
                class="scroll-y chat grey lighten-3"
                id="scroll-target">
      <div class="chat-history">
        <ul>
          <!-- <li class="clearfix">
            <div class="message-data align-right">
              <span class="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
              <span class="message-data-name" >Me</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="message other-message float-right">
              Hi Vincent, how are you? How is the project coming along?
            </div>
          </li> -->
          
          <li v-for="x in chat" :key="x.id" :class="{clearfix: x.fr_user_id === user.id}">
            <div v-if="x.fr_user_id !== 6">
              <div  class="message-data">
                <span class="message-data-name">{{x.freelance}}</span>
                <span class="message-data-time">{{x.created_at}}</span>
              </div>
              <div class="message my-message">
                  <div>
                    <img :src="base + x.images" :alt="base + x.images" width="300">
                  </div>
              {{x.message}}
                <div v-if="x.images">
                  <v-btn class="red">Perubahan (3)</v-btn>
                  <v-btn class="blue">Setuju</v-btn>
                </div>
              </div>
            </div>

            <div v-if="x.fr_user_id === user.id">
              <div class="message-data align-right">
                <span class="message-data-time" >{{x.created_at}}</span> &nbsp; &nbsp;
                <span class="message-data-name" >Me</span>
                
              </div>
              <div class="message other-message float-right">
                <div>
                  <img :src="base+'/uploads/'+ x.images" alt="" width="300">
                </div>
                {{ x.message }}        
              </div>
            </div>
            
              
          </li> 
        </ul>
        
      </div>
    </v-container>
    <v-card-action>
      <!-- <v-layout>
        <v-flex md11>
           <v-text-field solo>
          </v-text-field>
        </v-flex>
        <v-flex md1>
          <v-btn color="success" >
            <v-icon>send</v-icon>
          </v-btn>
        </v-flex>
      </v-layout> -->
      <v-toolbar flat prominent>
        <v-toolbar-items class="hidden-sm-and-down mx-0">
          <v-text-field placeholder="send yout message...." solo class="chat_box" v-model="chat.message"></v-text-field>
          <v-btn flat class="btn-file" color="blue darken-2"><v-icon>attach_file</v-icon><input type="file" class="upload" @change="onChange"/></v-btn>
          <v-btn flat color="green darken-2" @click="send()"><v-icon>send</v-icon></v-btn>         
         
        </v-toolbar-items>
      </v-toolbar>  
    </v-card-action>
  </v-card>
</template>

<script>
export default {
  props: ['chat', 'list'],
  data () {
    return {
      // base: 'http://localhost:8000/messages/',
      chat: {
        message: '',
        image: ''
      }
      // chat: []
    }
  },
  methods: {
    send () {
      console.log(this.chat.message)
      if (this.chat.message) {
        let data = {
          to_user_id: this.list.freelancer_id,
          order_id: this.list.id,
          message: this.chat.message,
          images: this.chat.image
        }
        this.$store.dispatch('sendMessage', data)
        this.chat.message = ''
      }
    },
    onChange (e) {
      var fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0])
      fileReader.onload = (e) => {
        this.chat.image = e.target.result
        console.log(this.chat.image)
      }
    }
  },
  computed: {
    base () {
      return this.$store.getters.url
    },
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style lang="scss" scoped>


@import url(https://fonts.googleapis.com/css?family=Lato:400,700);

$green: #86BB71;
$blue: #94C2ED;
$orange: #E38968;
$gray: #92959E;





.container {
  margin: 0 auto;
  width: 750px;
  background: #444753;
  border-radius: 5px;
}

.btn-file input.upload{
  width: 100%;
  height: 100%;
   position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
    
}

.chat_box{
  width: 900px;
}

.chat {
  width: 100%;
  background: #F2F5F8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 390px;
  color: #434651;
  
  .chat-header {
    padding: 20px;
    border-bottom: 2px solid white;
    
    img {
      float: left;
    }
    
    .chat-about {
      float: left;
      padding-left: 10px;
      margin-top: 6px;
    }
    
    .chat-with {
      font-weight: bold;
      font-size: 16px;
    }
    
    .chat-num-messages {
      color: $gray;
    }
    
    .fa-star {
      float: right;
      color: #D8DADF;
      font-size: 20px;
      margin-top: 12px;
    }
  }
  
  .chat-history {
    padding: 30px 30px 20px;
    border-bottom: 2px solid white;
   
    height: 575px;
    
    .message-data {
      margin-bottom: 15px;
    }
    
    .message-data-time {
      color: lighten($gray, 8%);
      padding-left: 6px;
    }
    
    .message {      
      color: white;
      padding: 18px 20px;
      line-height: 26px;
      font-size: 16px;
      border-radius: 7px;
      margin-bottom: 30px;
      width: 50%;
      position: relative;
      
      &:after {
        bottom: 100%;
        left: 7%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-bottom-color: $green;
        border-width: 10px;
        margin-left: -10px;
      }
    }
    
    .my-message {
      background: $green;
    }
    
    .other-message {
      background: $blue;
      
      &:after {
        border-bottom-color: $blue;
        left: 93%;
      }
    }
    
  }
}

.online, .offline, .me {
    margin-right: 3px;
    font-size: 10px;
  }
  
.online {
  color: $green;
}
  
.offline {
  color: $orange;
}

.me {
  color: $blue;
}

.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

.float-right {
  float: right;
}

.clearfix:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}

ul{
     list-style:none;
}

</style>
