<script setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useI18n } from 'vue-i18n';
import { watchEffect } from 'vue';

const isDark = useDark()
const toggleDark = useToggle(isDark)

const {t, locale} = useI18n()

const size = ' size-5'
const themeIcon = ref({
  icon: (isDark.value ? 'icon-[tabler--sun-filled]' : 'icon-[tabler--moon-filled]') + size
})
const toggleTheme = () => {
  toggleDark()
  console.log(isDark.value)
  isDark.value
    ? (themeIcon.value.icon = 'icon-[tabler--sun-filled]' + size)
    : (themeIcon.value.icon = 'icon-[tabler--moon-filled]' + size)
}

 const langIcon = ref({
  icon: 'icon-[circle-flags--uk]' + size,
  iconList: [
    'icon-[circle-flags--uk]',
    'icon-[emojione--flag-for-spain]',
    'icon-[emojione--flag-for-germany]'
  ],
  index: 1
}) 

const langList = ['eng', 'spa', 'ger']

defineProps({
  theme: Object
})
 const toggleLang = () => {
  langIcon.value.index = langIcon.value.index >= 3 ? 0 : langIcon.value.index
  langIcon.value.icon = langIcon.value.iconList[langIcon.value.index++] + size
  const newLang = langList[langIcon.value.index-1]
  locale.value = newLang
  localStorage.setItem('lang', newLang)
} 

watchEffect(() => {
  const storedLang = localStorage.getItem('lang');
  if (storedLang) {
    locale.value = storedLang;
  }
});
const headerButtonStyle =
  'hover:bg-gray-200 rounded-md size-5 p-2 box-content dark:hover:bg-gray-800'
</script>
<template>
  <section class="container mx-auto text-center pt-10 dark:text-white">
    <h1 class="text-5xl font-bold mb-4">Alejandra Tonito</h1>
    <div class="space-y-2">
      <p class="block">{{ t('subtitle') }}</p>
      <nav class="justify-items-center">
        <button @click="toggleLang" :class="headerButtonStyle">
          <span :class="langIcon.icon"></span>
        </button>
        <button :class="headerButtonStyle">
          <a href="https://github.com/noirecode" target="_blank"
            ><span class="icon-[bi--github] size-5"></span
          ></a>
        </button>
        <button :class="headerButtonStyle">
          <a href="https://noiregames.itch.io/" target="_blank"
            ><span class="icon-[cib--itch-io] size-5"></span
          ></a>
        </button>
        <button :class="headerButtonStyle">
          <a href="mailto:alejandratonito@gmail.com"
            ><span class="icon-[ic--round-email] size-5"></span
          ></a>
        </button>
        <button @click="toggleTheme" :class="headerButtonStyle">
          <span :class="themeIcon.icon"></span>
        </button>
      </nav>
      <p class="inline-flex items-center text-sm">
        <span class="icon-[tabler--map-pin-filled] size-4 mr-2"></span>Venezuela
      </p>
    </div>
  </section>
</template>
<style></style>
