<template>
<div id="HomeContainer" class="pageContainer">
  <video-background></video-background>
  <div id="HomeContent">
    <section class="welcomeContainer">
      <article id="brand">
        <logo-curso></logo-curso>
        <header>
          <h1>Diseño y Comunicación</h1>
          <h2>Innovación en dispositivos de conversación</h2>
          <p class="line1">Innovación</p>
          <p class="line2">en dispositivos</p>
          <p class="line2">de conversación</p>
        </header>
      </article>

      <article class="welcome">
        <h1 class="md-display-2">¡Hola!</h1>
        <p class="md-body-2">Este espacio de formación se propone porque entendemos que es necesario poder <b>consolidar espacios de construcción colectiva entre los docentes</b>, a los fines de <b>trabajar transversalmente</b> algunos de los lineamientos que dispone el Plan de Estudios. De allí emerge una definición de un profesional, inserto en un ámbito de trabajo –tanto público, privado, tercer sector o hibrido- apropiándose de una metodología proyectual orientada por la estrategia, para el diseño y puesta en uso de dispositivos de comunicación que aporten a la transformación social desde un enfoque sustentable.</p>
        <md-button class="welcomeBtn no-margin-top" v-show="!readMore"  @click="readMore= !readMore">Leer más</md-button>
        <p class="md-body-2" v-show="readMore">Reconocernos en ese entramado de saberes es una oportunidad única de encontrarnos en las diferencias y concederles el valor académico que viabiliza la innovación.</p>
        <p class="md-body-2" v-show="readMore">Para formar a este nuevo profesional, <b>nos proponemos revisar nuestra propia formación, pensando en los dos ejes</b> de trabajo <b>que articulan las competencias de nuestros egresados</b>: <i>el diseño</i> y <i>la comunicación.</i></p>
        <p class="md-body-2" v-show="readMore">En este marco, la propuesta reconoce al diseño como una praxis proyectual mediada por dimensiones culturales, económicas y políticas; las cuales impactan en los factores estéticos, simbólicos y funcionales propios de la función de diseño.</p>
        <p class="md-body-2" v-show="readMore"><b>Cada una de las asignaturas</b> que se dispone en nuestro plan de estudio, <b>colabora para consolidar un profesional que se instituya como un operador cultural</b>, cuyo fin último es el diseño de estrategias conversacionales que permitan la puesta en dialogo de los diversos actores sociales involucrados en las problemáticas contemporáneas y de raigambre histórica.</p>
        <br>
        <md-button to="/addTag" class="welcomeBtn addWordBtn"><i class="mdi mdi-plus"></i> A palabra tendida</md-button>
        <md-button to="/cloud" class="welcomeBtn"><i class="mdi mdi-cloud"></i> Nube Colectiva</md-button>
        <md-button to="/mindmap" class="welcomeBtn"><i class="mdi mdi-google-circles-extended"></i> Entramado de Saberes</md-button>
        <br>
        <md-button :href="driveURL" class="welcomeBtn"><i class="mdi mdi-google-drive"></i> Archivos del curso</md-button>
      </article>

      <footer>

        <article>
          <logo-unvime></logo-unvime>
          <header>
            <h1>Licenciatura<br> en Diseño de <br>Comunicación</h1>
              <h2>Escuela de Gestión<br>de Empresas y Economía</h2>
          </header>
        </article>
        <!--<article id="tachusoBrand">
          <span>made with&nbsp;</span><i class="mdi mdi-heart"></i><span>&nbsp;by</span>
          <div class="tachusoLogo">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
              <path fill="#FFFFFF" d="M217.546,0.911c-45.053,8.26-70.834,18.021-104.123,39.797C-1.964,115.797-34.753,270.479,40.336,386.366
              c17.02,26.531,53.313,61.573,79.093,77.091C160.728,487.986,203.529,500,250.084,500c66.579,0,126.399-24.529,173.956-71.334
              c47.556-46.555,72.085-100.619,75.589-165.445c3.754-72.335-21.025-137.412-71.835-188.973
              c-32.038-32.538-77.592-58.569-120.142-68.581C289.631,1.411,231.562-1.592,217.546,0.911z M226.556,91.017l15.268,29.034
              l15.268-27.282l15.518-27.032v49.308v49.058l7.008,1.502c3.754,0.751,13.516,2.002,21.776,2.753
              c8.26,1.001,16.77,2.253,19.022,2.753c3.254,1.001,4.255-1.502,5.256-11.514c2.253-22.777,20.524-34.291,51.811-32.038
              c47.556,3.504,74.338,48.808,45.804,77.091c-5.006,5.256-10.763,9.762-12.765,10.262c-2.503,1.001-1.001,5.256,5.507,17.27
              c21.025,38.295,16.269,82.598-13.266,124.397c-29.535,42.3-75.589,64.576-132.657,64.076
              c-68.331-0.501-132.406-26.031-156.935-62.574c-17.771-26.031-22.026-53.563-14.517-89.606c2.002-9.511,3.754-17.771,3.754-18.021
              c0-0.501-6.508-0.751-14.517-0.751c-31.037,0-53.063-19.773-53.063-47.556c0-39.046,26.281-67.58,61.823-67.58
              c22.026,0,41.799,17.521,51.811,45.304c2.503,6.758,5.006,12.264,5.757,12.264c1.502,0,33.289-17.771,33.289-18.522
              c0-0.501-7.759-19.022-17.521-41.799c-9.511-22.527-17.521-42.05-17.521-43.051c0-1.251,11.013,7.509,24.529,19.273l24.279,21.275
              l3.504-33.54c1.752-18.522,4.005-33.79,5.006-33.79C210.537,61.983,218.046,74.998,226.556,91.017z"/>
              <path fill="#FFFFFF" d="M280.37,317.535c-19.523,6.007-25.78,15.769-14.767,23.277c18.272,13.015,67.58-7.008,51.311-20.775
              C311.657,316.033,290.632,314.531,280.37,317.535z"/>
              </svg>
          </div>
          <span class="tachusoName">tachuso</span>
        </article>-->
        <article id="legalnotice">
          <p class="md-caption">Responsable: <b>Mg. Javier Spagnolo</b></p>
          <p class="md-caption">Co-Responsables: <b>Mg. Marta Balboa</b>, <b>Lic. Esp. Evelyn Gerson</b>, <b>DCV Carlos Carranza</b></p>
          <p class="md-caption">Docente Invitada Especial: <b>Dra. Sandra Massoni</b></p>
          <p class="md-caption">Coordinadora: <b>Dra. Roxana Lobos</b></p>
          <p class="md-caption special">Diseño y Desarrollo de WebApp: <b>Lic. Tatiana Hotimsky</b> y <b>Lic. Walter Molina</b></p>
          <p class="md-caption special"><b>¿Te gusta esta app?</b> Podes ver su código, aprender a programar y aportar mejoras en <a href="https://github.com/waltermolina/nubedetagsunvime"><i class="mdi mdi-github-circle"></i> GitHub</a></p>
        </article>

      </footer>
    </section>

  </div>
</div>
</template>

<script>
import VideoBackground from '../../components/VideoBackground/VideoBackground'
import LogoCurso from '../../components/LogoCurso.vue'
import LogoUnvime from '../../components/LogoUnvime.vue'
export default {
  name: 'Home',
  components: {
    'video-background': VideoBackground,
    'logo-curso': LogoCurso,
    'logo-unvime': LogoUnvime
  },
  data: () => ({
    readMore: false,
    driveURL: 'https://drive.google.com/drive/folders/1N1gdNSnnqFbbm5v2F4j-q5IsjNDX0KYL'
  }),
  methods: {
    tatto: function () {
      console.log('by tachuso!')
    }
  },
  mounted () {
    this.tatto()
  }
}
</script>

<style scoped>
@import "Home.min.css";
</style>
