<template>
<div id="app">
    <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
    <router-view />
    </transition>
</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,300i,500,500i,700");
@import url("https://fonts.googleapis.com/css?family=Share+Tech");
@import "http://cdn.materialdesignicons.com/2.4.85/css/materialdesignicons.min.css";
@import "../src/styles/reboot.min.css";
@import "../src/styles/common.min.css";
@import "../src/styles/ui.min.css";
</style>
