<script setup>
import {ref,reactive, computed} from "vue"
import { MessagePlugin } from 'tdesign-vue-next';
import Http from "../api/config";



const formData = reactive({
  username:localStorage.getItem('username'),
  title: '',
  subarea: '',
  mini_content: computed(()=>{
    if (formData.content.length>40){
      return formData.content.slice(0,40) + '...';
    }
    return formData.content
  }),
  content: '',
  cover: computed(()=>{
    if(formData.pictures.length>0){
      return formData.pictures[0]
    }
    return null
  }),
  pictures:computed(()=>{
      return files.value.map(item=>{
      return item.url
    })
  })
});

// 上传图片代码
const files = ref([]);
const fileFail = ref([]);
const disabled = ref(false);
const uploadAllFilesInOneRequest = ref(false);
const autoUpload = ref(true);
const uploadRef3 = ref();
const Token = localStorage.getItem("token")
const handleFail = ({ file }) => {
  MessagePlugin.error(`文件 ${file.name} 上传失败`);
};

const formatRes = (response)=>{
  console.log(response.message)
  return {url:response.message}
}
const imgChange = ()=>{
  console.log('gaibianhou')
  console.log(formData.pictures)
  console.log(formData.cover)

}



const options1 = [
  { label: '学习区', value: '学习区' },
  { label: '游戏区', value: '游戏区' },
  { label: '八卦区', value: '八卦区' },
  { label: '交友区', value: '交友区'},
  { label: '活动发布区', value: '活动发布区' },
  { label: '闲置交易区', value: '闲置交易区' },
  { label: '招聘求职区', value: '招聘求职区' },
  { label: '失物招领区', value: '失物招领区' },
];

const submit = async()=>{
  const res = await Http.post('/savepost',formData)
  if (res.data.code == 1) {
        MessagePlugin.success("发布成功")
        console.log(res)

      } else {
        MessagePlugin.error(res.data.message)
        console.log(res)
      }
}
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
        <t-select v-model="formData.subarea" :options="options1" placeholder="请选择要发布的分区" />
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
      action="http://121.4.57.111:8086/upload"
      theme="image"
      tips="允许选择多张图片文件上传，最多只能上传 3 张图片，第一张作为封面"
      accept="image/*"
      :headers={Token:Token}
      :abridge-name="[6, 6]"
      :disabled="disabled"
      :auto-upload="autoUpload"
      :upload-all-files-in-one-request="uploadAllFilesInOneRequest"
      :formatResponse="formatRes"
      multiple
      :max="3"
      @change="imgChange"
      @fail="handleFail"
    ></t-upload>      </t-form-item>
      <t-form-item>
        <t-button theme="primary" type="submit" block @click="submit">发布</t-button>
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