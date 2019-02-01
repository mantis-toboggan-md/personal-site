<template>
  <div class="home">
    <side-nav> </side-nav>
    <div v-scroll-spy>
      <about></about>
      <education></education>
      <projects></projects>
      <skills></skills>
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue'
import About from '@/views/About.vue'
import Education from '@/views/Education.vue'
import Projects from '@/views/Projects.vue'
import Skills from '@/views/Skills.vue'



export default {
  components: {
    SideNav,
    About,
    Education,
    Projects,
    Skills
  }
}
</script>
