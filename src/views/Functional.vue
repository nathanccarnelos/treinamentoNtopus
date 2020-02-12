<template>
  <div>
    <div v-for="(image, index) in imageList" :key="index">
      <ImageCard :imageSrc="image['download_url']" :name="image.id" :author="image.author" :imageUrl="image.url"/>
<!--      <img :src="image['download_url']" alt="" width="200">-->
<!--      {{image['download_url']}}-->
    </div>
  </div>
</template>

<script lang="ts">
import ImageCard from '@/components/ImageCard.vue'
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({components: {
    ImageCard,
  }})
export default class Functional extends Vue {
  public imageList: string[] = []

  public mounted(): void {
    axios.get('https://picsum.photos/v2/list?limit=10').then((response) => {
      console.log(response.data)
      this.imageList = response.data
    })
  }
}
</script>
