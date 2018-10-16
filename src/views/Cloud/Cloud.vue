<template>
<div id="CloudContainer" class="pageContainer">
  <header id="appHeader">
    <button id="back" class="button float-left" @click="$router.go(-1)"><i class="mdi mdi-arrow-left"></i></button>
    <h1 class="float-left"></h1>
    <div class="clr"></div>
  </header>
  <video-background></video-background>

  <div id="CloudContent">
    <article v-bind:class="['intro',{hide: !showInfo}]">
      <button id="close" v-on:click="showInfo= !showInfo"><i class="mdi mdi-close"></i></button>
      <h1 class="md-display-1"><b>Nube Colectiva</b> del perfil del egresado</h1>
      <p class="md-subheading">En estas palabras se encuentra la construcción colectiva del perfil profesional de la Licenciatura en Diseño de Comunicación y su titulación intermedia, la Tecnicatura Universitaria en Diseño de Comunicación. Es una síntesis del proceso de enseñanza aprendizaje que se desarrolla en cada uno de los espacios en donde producimos este conocimiento.</p>
    </article>

    <md-speed-dial md-direction="top" class="fab" >
      <md-speed-dial-target>
        <i class="mdi mdi-settings"></i>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button" @click="showInfo= !showInfo">
          <i class="mdi mdi-information-outline"></i>
        </md-button>
        <md-button class="md-icon-button" @click="getWords">
          <i class="mdi mdi-refresh"></i>
        </md-button>

      </md-speed-dial-content>
    </md-speed-dial>

    <div id="theCloud">
      <vue-word-cloud :words="words" :color="([, count]) => count > 10 ? 'rgba(255,255,255,0.5)' : count > 8 ? 'rgba(255,255,255,0.7)' : count > 6 ? 'rgba(255,255,255,0.8)': count > 4 ? 'rgba(255,255,255,0.9)':'rgba(255,255,255,0.9)'" font-family="Roboto" :font-weight="([, count]) => count > 10 ? '700' : count > 8 ? '500' : count > 6 ? '300': count > 4 ? '100':'100'" />
    </div>

  </div>
</div>
</template>

<script>
import VideoBackground from '../../components/VideoBackground/VideoBackground'
import VueWordCloud from 'vuewordcloud'
import axios from 'axios'
export default {
  name: 'Cloud',
  components: {
    [VueWordCloud.name]: VueWordCloud,
    'video-background': VideoBackground
  },
  data: () => ({
    wordsOriginal: [],
    words: [],
    showInfo: true
  }),
  methods: {
    customClick () {
      window.alert('You can have a custom click inside the target!')
    },
    getWords: function () {
      axios
        .get('http://sd-1536123-h00003.ferozo.net/public/concepto/all?weight=true')
        .then(response => {
          this.wordsOriginal = response.data.result
          this.words = this.wordsOriginal.map(function (t) {
            return [t.palabra, t.count]
          })
        })
        .catch(e => {})
    }
  },
  created () {
    this.getWords()
  }
}
</script>

<style scoped>
@import "Cloud.min.css";
</style>
