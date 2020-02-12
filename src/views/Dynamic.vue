<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class Dynamic extends Vue {
  public imageList: string[] = []

  public mounted(): void {
    axios.get('https://picsum.photos/v2/list?limit=10').then((response) => {
      console.log(response.data)
      this.imageList = response.data
    })
  }
}
</script>
