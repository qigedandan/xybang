<script setup>
import {ref,reactive} from "vue"
import { MessagePlugin } from 'tdesign-vue-next';

const title = ref("")
const area = ref("")
const content = ref("")

const formData = reactive({
  title: '',
  area: '',
  comment: '',
});

// 上传图片代码
const files = ref([]);
const fileFail = ref([]);
const disabled = ref(false);
const uploadAllFilesInOneRequest = ref(false);
const autoUpload = ref(true);
const uploadRef3 = ref();
const handleFail = ({ file }) => {
  MessagePlugin.error(`文件 ${file.name} 上传失败`);
};



const options1 = [
  { label: '学习区', value: '1' },
  { label: '游戏区', value: '2' },
  { label: '八卦区', value: '3' },
  { label: '交友区', value: '4'},
  { label: '活动发布区', value: '5' },
  { label: '闲置交易区', value: '6' },
  { label: '招聘求职区', value: '7' },
  { label: '失物招领区', value: '8' },
];
</script>
<template>
<div class="container">
    <t-form ref="form" :data="formData" :colon="true"  @reset="onReset" @submit="onSubmit">
      <t-form-item label="标题" name="title">
        <t-input
      v-model="formData.title"
      :maxlength="20"
      show-limit-number
      placeholder="简单描述一下需求，不超过20个字"
    />
      </t-form-item>
      <t-form-item label="分区" name="area">
        <t-select v-model="formData.area" :options="options1" placeholder="请选择要发布的分区" />
      </t-form-item>

      <t-form-item label="正文" name="content">
        <t-textarea
      v-model="formData.content"
      placeholder="请输入描述文案，最多200个字"
      :maxlength="200"
      :autosize="{ minRows: 3, maxRows: 10 }"
    ></t-textarea>
      </t-form-item>
      <t-form-item label="图片" name="url">
        <t-upload
      ref="uploadRef3"
      v-model="files"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      theme="image"
      tips="允许选择多张图片文件上传，最多只能上传 3 张图片"
      accept="image/*"
      :abridge-name="[6, 6]"
      :disabled="disabled"
      :auto-upload="autoUpload"
      :upload-all-files-in-one-request="uploadAllFilesInOneRequest"
      multiple
      :max="3"
      @fail="handleFail"
    ></t-upload>      </t-form-item>
      <t-form-item>
        <t-button theme="primary" type="submit" block>发布</t-button>
      </t-form-item>
    </t-form>


</div>
</template>
<style scoped>
.container {
    padding: 24px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  /* padding: 2rem; */
  text-align: center;
  border: 1px solid #d0d7de;
  border-radius: 2px;
}
</style>