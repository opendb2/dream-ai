<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script setup>
import NavBar from '@cmp/nav.vue'
</script>

<style>
html {
	height: 100%;
}
body {
	margin: 0;
	height: 100%;
}
#app {
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>
