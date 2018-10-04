<template>
<div id="HomeContainer" class="pageContainer">
  <div id="videoOverlay"></div>
  <video data-v-1e97ceea="" poster="static/fondovideo.jpg" id="homeVideo" playsinline="" autoplay="autoplay" muted="muted" loop="loop">
      <source data-v-1e97ceea="" src="../../assets/animated gradient.mp4" type="video/mp4">
    </video>

  <div id="HomeContent">
    <section class="welcomeContainer">
      <article id="brand">
        <img src="../../assets/logo.jpg">
        <header>
          <h2>Licenciatura</h2>
          <h2>en Diseño</h2>
          <h2>de Comunicación</h2>
          <!--<h1>Curso de Posgrado de XXXXXXXX</h1>
          <h1>UNViMe 2018</h1>-->
        </header>
      </article>

      <article class="welcome">
        <h1 class="md-display-2">Bienvenido!</h1>
        <p class="md-body-1">Acá va un texto que Carlos tiene que pensar... Debería ser una bienvenida cortita invitando a usar esta pequeñita web app...</p>
        <p class="md-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis congue neque, at dictum purus. Vivamus aliquam luctus auctor. Nulla nec congue erat. Morbi magna justo, auctor ac nibh luctus, consequat rutrum nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec lacinia malesuada hendrerit. Praesent nec ex eget mi sagittis cursus. Curabitur porttitor vehicula libero ornare semper. Donec sit amet nulla sapien. Donec fermentum erat ullamcorper est sollicitudin, id cursus ligula tincidunt.</p>
        <p class="md-body-1">Integer ac mollis erat. Praesent nec elit viverra, bibendum lectus id, aliquam sem. Nam sit amet lectus sapien. In nulla neque, semper ut pellentesque rutrum, venenatis ac mauris. Sed mollis mattis feugiat. Nunc mattis, magna quis tempor rutrum, nibh lectus commodo mauris, porta volutpat elit est eget nibh. Maecenas in sapien mattis, vestibulum enim eget, rhoncus sem. Etiam tortor magna, ullamcorper quis tellus at, sodales faucibus mauris. Fusce eu mauris diam. Vivamus dapibus justo eros, sit amet auctor mi pulvinar ut. Suspendisse vel dolor sit amet purus convallis consectetur eu vel tortor. Sed sollicitudin accumsan dictum.</p>

        <md-button to="/addTag" class="welcomeBtn addWordBtn"><i class="mdi mdi-plus"></i> Aportar Palabra</md-button>
        <md-button to="/cloud" class="welcomeBtn"><i class="mdi mdi-cloud"></i> Ver Nube de Tags</md-button>
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
@import "Home.min.css";
</style>
