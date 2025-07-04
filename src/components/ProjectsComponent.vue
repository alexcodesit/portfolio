<script setup>
import { ref, computed } from 'vue'
import projects from '@/assets/projects.json'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const limit = ref(3)
const projectCategory = ref('fav')

const loadedProjects = computed(() => {
  return projectCategory.value === 'all'
    ? projects.slice(0, limit.value)
    : projects.filter((prj) => {
        return prj.category.includes(projectCategory.value)
      })
})
const length = computed(() => {
  return projectCategory.value === 'all' ? projects.length : loadedProjects.value.length
})
const showMore = () => {
  limit.value + 3 > length.value ? (limit.value = length.value) : (limit.value += 3)
  console.log(limit.value, length.value)
}

const showLess = () => {
  limit.value - 3 < 3 ? (limit.value = 3) : (limit.value -= 3)
}

const categoryFilter = (category) => {
  limit.value = 3
  projectCategory.value = category
  console.log(loadedProjects)
}

const transformStyle = ' hover:transform hover:rotate-12 transition-all'
const techStyle = 'border-b-2 border-red-500 pb-2 cursor-default font-normal dark:border-lime-500'
const buttonStyle =
  'bg-red-500 px-6 py-2 box-content dark:text-black dark:bg-lime-500 rounded-sm' + transformStyle
</script>
<template>
  <div>
    <h2 class="font-bold text-4xl mb-12">02. // {{t('projects-title')}}</h2>
    <div class="space-x-6">
      <button :class="buttonStyle" @click="categoryFilter('fav')">{{t('p-fave')}}</button>
      <button :class="buttonStyle" @click="categoryFilter('web')">web</button>
      <button :class="buttonStyle" @click="categoryFilter('game')">{{t('p-game')}}</button>
      <button :class="buttonStyle" @click="categoryFilter('all')">{{t('p-all')}}</button>
    </div>
  </div>
  <div v-auto-animate>
    <section
      class="flex flex-row space-x-4 w-full mt-20"
      v-for="(project, index) in loadedProjects"
      :key="index"
    >
      <div class="w-3/4">
        <h3 class="font-bold text-2xl mb-4 border-b-2 border-black dark:border-neutral-400">
          {{ project.title }}
        </h3>
        <p>
          {{ t(project.id)}}
        </p>
        <div class="pt-6 space-x-6">
          <span v-for="tool in project.tools" :key="tool" :class="techStyle"> {{ tool }}</span>
        </div>
        <div class="pt-12" v-if="project.link">
          <span :class="buttonStyle"><a :href="`${project.link}`" target="_blank">github</a></span>
        </div>
      </div>
      <div class="w-2/4">
        <img
          :src="`${project.img}`"
          :class="`object-contain size-80 w-full rounded-sm + ${transformStyle}`"
        />
      </div>
    </section>
  </div>
  <div>
    <button :class="buttonStyle" @click="showMore" v-if="limit < length">
      <span class="icon-[uil--arrow-down] size-4"></span> show more
    </button>
    <button :class="buttonStyle" @click="showLess" v-else-if="limit > 3">
      <span class="icon-[uil--arrow-up] size-4"></span> show less
    </button>
  </div>
</template>
