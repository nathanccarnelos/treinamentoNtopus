<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-btn @click="$router.push('/dynamic')" class="mr-3">Dynamic</v-btn>
      <v-btn @click="$router.push('/functional')">functional</v-btn>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  public routerGo(route: string) {
    this.$router.push(route)
  }
}
</script>
