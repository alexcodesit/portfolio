<script setup>
const generalStyle = ' border-2 border-red-500 box-content p-2 bg-transparent dark:text-white'
const inputStyle = 'h-12' + generalStyle
const messageStyle = 'h-48' + generalStyle
const buttonStyle = ' bg-red-500 px-6 py-6 box-content text-2xl font-bold'
</script>
<template>
  <h3 class="font-bold text-4xl border-b-2 border-black mb-4 dark:border-neutral-400">
    03. // contact me
  </h3>
  <div class="flex justify-center">
    <form action="" class="flex flex-col w-2/4 space-y-6 justify-items-center">
      <input type="text" name="name" id="name" placeholder="name" :class="inputStyle" />
      <input type="email" name="email" id="email" placeholder="email" :class="inputStyle" />
      <input type="text" name="subject" id="subject" placeholder="subject" :class="inputStyle" />
      <textarea name="message" id="message" placeholder="message" :class="messageStyle"></textarea>
      <button :class="buttonStyle">Send message</button>
    </form>
  </div>
</template>
