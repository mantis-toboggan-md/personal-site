<template>
  <div id='about' class = 'main-section'>
    <v-layout>
      <v-flex>
        <div>
          <sequential-entrance fromTop>
            <welcome></welcome>
            <div>
              What up bitches
            </div>
          </sequential-entrance>
        </div>
        <v-parallax src = 'snoquera1080.jpeg' dark height = '1000' class='para-container'>
        </v-parallax>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import Welcome from '@/components/Welcome.vue'


  export default {
    name:'about',
    data(){
      return {}
    },
    components: {
      Welcome,
    }
  }
</script>

<style>
</style>
