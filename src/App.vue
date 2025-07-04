<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import CardComponent from './components/CardComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'

</script>
<template>
  <div class="flex flex-col container mx-auto lg:w-3/6 md:w-11/12">
    <header>
      <HeaderComponent />
    </header>
    <main class="space-y-16 mt-20 mb-6">
      <CardComponent />
      <ProjectsComponent />
    </main>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
body {
  font-family: 'Nanum Gothic Coding', monospace;
  font-weight: 400;
  font-style: normal;
  margin: 0 auto;
}
h1,
h2,
h3 {
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-style: normal;
  padding-bottom: 0.4em;
}
html {
  background: #f5f5f5;
}
.dark {
  background-color: #0a0a0a;
  color: white;
}
</style>
