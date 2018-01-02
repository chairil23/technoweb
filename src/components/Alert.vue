<template>
  <div>   
    <v-alert
      :color= "color"
      :icon="icon"
      :value="alert"
      transition="scale-transition"
    >
      {{message}}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: ['color', 'icon', 'alert', 'message']
}
</script>

