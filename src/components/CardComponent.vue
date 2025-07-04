<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <section>
    <div class="">
      <h2 class="font-bold text-4xl border-b-2 border-black mb-10 dark:border-neutral-400">
        01. // {{ t('about-title') }}
      </h2>
      <p>
        {{ t('about') }}
      </p>
    </div>
  </section>
</template>
