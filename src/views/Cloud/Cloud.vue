<template>
<div id="CloudContainer" class="pageContainer">
  <header id="appHeader">
    <button id="back" class="button float-left" @click="$router.go(-1)"><i class="mdi mdi-arrow-left"></i></button>
    <h1 class="float-left"></h1>
    <div class="clr"></div>
  </header>
  <div id="videoOverlay"></div>
  <video data-v-1e97ceea="" poster="static/fondovideo.jpg" id="homeVideo" playsinline="" autoplay="autoplay" muted="muted" loop="loop">
      <source data-v-1e97ceea="" src="../../assets/animated gradient.mp4" type="video/mp4">
    </video>

  <div id="CloudContent">
    <section class="welcomeContainer">

      <article class="welcome">
        <h1 class="md-headline">¿Mucha prisa?</h1>
        <p class="md-subheading">Esta sección aún no está terminada 🤷‍... Una cerveza 🍺 podría ayudar a acelerar las cosas...</p>

      </article>
    </section>

  </div>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
@import "Cloud.min.css";
</style>
