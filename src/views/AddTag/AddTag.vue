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
      <h1 class="md-headline">Aportar palabra</h1>
      <p class="md-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis congue neque, at dictum purus. Vivamus aliquam luctus auctor. Nulla nec congue erat. Morbi magna justo, auctor ac nibh luctus, consequat rutrum nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec lacinia malesuada hendrerit. Praesent nec ex eget mi sagittis cursus. Curabitur porttitor vehicula libero ornare semper. Donec sit amet nulla sapien. Donec fermentum erat ullamcorper est sollicitudin, id cursus ligula tincidunt.</p>

      <md-field>
        <md-select v-model="subject" name="subject" id="subject" placeholder="¿Cátedra?">
          <md-option value="australia">Laboratorio I</md-option>
          <md-option value="brazil">Taller IV</md-option>
          <md-option value="japan">Programación III</md-option>
          <md-option value="united-states">Diseño y Gestión de Internet</md-option>
        </md-select>
      </md-field>

      <md-field md-clearable>
        <label>¿Palabra?</label>
        <md-input v-model="maxLength" maxlength="30"></md-input>
        <span class="md-helper-text">Intenta describir el aporte de la cátedra al perfil del egresado</span>
      </md-field>

      <md-button class="md-raised md-primary sendButton"><i class="mdi mdi-send"></i> Enviar</md-button>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AddTag'
}
</script>

<style scoped>
@import "AddTag.min.css";
</style>
