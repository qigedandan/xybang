<script setup>
import {ref} from "vue"
const title = ref("")
const area = ref("")
const content = ref("")
</script>
<template>
<div class="containner">
    <t-space direction="vertical">
    <t-textarea v-model="title" placeholder="请输入描述文案，文本长度最多20，maxlength=20" :maxlength="20"></t-textarea>
    <t-textarea
      v-model="content"
      placeholder="请输入描述文案，最多200个字"
      :maxlength="200"
    ></t-textarea>
  </t-space>
</div>
</template>
<style scoped>
.container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  /* padding: 2rem; */
  text-align: center;
}
</style>