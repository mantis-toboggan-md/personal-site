<template>
  <div id='side-nav'>
    <ul v-scroll-spy-active v-scroll-spy-link>
      <li>
        <a href= '#home'>About</a>
      </li>
      <li>
        <a href='#education'>Education</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>
      <li>
        <a href='#skills'>Skillset</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'sideNav',
  data () {
    return {

    }
  }
}
</script>

<style>
  #side-nav{
    display:flex;
    flex-direction: column;
    position:fixed;
    height: 100vh;
    justify-content: center;
    z-index: 1000;
  }
  li.active{
    background-color: red;
  }
  ul {
    list-style-type: none;
  }
</style>
