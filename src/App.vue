<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<style lang="scss">
  .main-section{
    height: 100vh;
    border: 1px solid red;
  }
  .para-container{
  }
</style>
