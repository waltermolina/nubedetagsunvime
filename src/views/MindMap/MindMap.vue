<template>
<div id="MindMapContainer" class="pageContainer">
  <header id="appHeader">
    <button id="back" class="button float-left" @click="$router.go(-1)"><i class="mdi mdi-arrow-left"></i></button>
    <h1 class="float-left"></h1>
    <div class="clr"></div>
  </header>
  <video-background></video-background>

  <div id="MindMapContent">
    <article v-bind:class="['intro',{hide: !showInfo}]">
      <button id="close" v-on:click="showInfo= !showInfo"><i class="mdi mdi-close"></i></button>
      <h1 class="md-display-1"><b>Entramado</b> de saberes</h1>
      <!--<p class="md-subheading">En estas palabras se encuentra la construcción colectiva del perfil profesional de la Licenciatura en Diseño de Comunicación y su titulación intermedia, la Tecnicatura Universitaria en Diseño de Comunicación. Es una síntesis del proceso de enseñanza aprendizaje que se desarrolla en cada uno de los espacios en donde producimos este conocimiento.</p>-->
    </article>

    <md-button v-show="!showInfo" class="md-icon-button md-raised md-accent fab" @click="showInfo = !showInfo">
      <i class="mdi mdi-information-outline"></i>
    </md-button>

    <div id="theMap">
      <mindmap
        :nodes="nodes"
        :connections="connections"
        :editable="false"
      />
    </div>

  </div>
</div>
</template>

<script>
import VideoBackground from '../../components/VideoBackground/VideoBackground'
import { palabras, conexiones } from '../../data/mindmap'

export default {
  name: 'MindMap',
  components: {
    'video-background': VideoBackground
  },
  data: () => ({
    showInfo: true,
    nodes: palabras,
    connections: conexiones
  }),
  methods: {
    customClick () {}
  },
  created () {}
}
</script>

<style scoped>
@import "MindMap.min.css";
</style>
