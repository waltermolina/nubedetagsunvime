<template>
<div id="AddTagContainer" class="pageContainer">
  <header id="appHeader">
    <button id="back" class="button float-left" @click="$router.go(-1)"><i class="mdi mdi-arrow-left"></i></button>
    <h1 class="float-left"></h1>
    <div class="clr"></div>
  </header>
  <div class="clr"></div>
  <div id="AddTagContent">

    <div class="mainForm">
      <h1 class="md-headline">A palabra tendida</h1>
      <p class="md-body-1"><b>Elegí la materia</b> en la que te desempeñaste durante el presente ciclo lectivo (si estuviste en varias, deberás completar este formulario una vez por cada materia). <b>Escribí una palabra</b> que exprese el aporte que hace esa asignatura al perfil de la carrera. No uses signos de puntuación ni conectores.</p>
      <p class="md-body-1">Si no podes expresar la idea en una sola palabra, podes usar varias palabras que la representen, por ejemplo <b>Design Thinking</b>.</p>

      <md-field>
        <md-select v-model="subject" name="subject" id="subject" placeholder="¿Cátedra?">
          <md-option v-bind:key="s.idAsignatura" v-for="s in subjects" :value="s.idAsignatura">{{s.nombre}}</md-option>
        </md-select>
      </md-field>

      <md-field md-clearable>
        <label>¿Palabra?</label>
        <md-input v-model="palabra" maxlength="30"></md-input>
        <span class="md-helper-text">Intenta describir el aporte de la cátedra al perfil del egresado</span>
      </md-field>

      <md-button class="md-raised md-primary sendButton" :disabled="(writing || (subject==''||palabra==''))" v-on:click="sendWord">Enviar <i class="mdi mdi-send"></i></md-button>

    </div>
    <md-snackbar :md-position="center" :md-duration="5000" :md-active.sync="snackBar.show" v-html="snackBar.message">

    </md-snackbar>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddTag',
  data: () => ({
    subjects: [],
    subject: '',
    palabra: null,
    snackBar: {
      show: false,
      message: ''
    },
    writing: false
  }),
  methods: {
    showSnackbar: function (m) {
      this.snackBar.message = m
      this.snackBar.show = true
    },
    getSubjects: function (event) {
      axios
        .get('http://sd-1536123-h00003.ferozo.net/public/asignatura/all')
        .then(response => {
          this.subjects = response.data.result
        })
        .catch(e => {
        })
    },
    sendWord: function (event) {
      this.writing = true
      axios
        .post('http://sd-1536123-h00003.ferozo.net/public/concepto/save', {
          palabra: this.palabra,
          idAsignatura: this.subject
        })
        .then(this.showSnackbar('<p class="md-body-1 no-margin"><i class="mdi mdi-check-circle-outline"></i> ¡Tu aporte ha sido guardado!</p>'))
        .catch(e => {
          this.showSnackbar('<p class="md-body-1 no-margin"><i class="mdi mdi-alert-circle-outline"></i> Veníamos bien y, de repente, <b>¡pasaron cosas!</p>')
        })
      this.writing = false
    }
  },
  created () {
    this.getSubjects()
  }
}
</script>

<style scoped>
@import "AddTag.min.css";
</style>
