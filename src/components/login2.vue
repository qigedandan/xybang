<template>
    <t-form ref="form" :data="formData" :rules="rules" @reset="onReset" @submit="onSubmit">
      <t-form-item label="用户名" help="这是用户名字段帮助说明" name="account">
        <t-input v-model="formData.account"></t-input>
      </t-form-item>

      <t-form-item label="密码" name="password">
        <t-input v-model="formData.password" type="password"></t-input>
      </t-form-item>
  
      <t-form-item>
        <t-space size="small">
          <t-button theme="primary" type="submit">提交</t-button>

        </t-space>
      </t-form-item>
    </t-form>
  </template>
  <script setup>
  import { ref, reactive } from 'vue';
  import { MessagePlugin } from 'tdesign-vue-next';
  
  const form = ref(null);
  const formData = reactive({
    account: '',
    password: '',
  });
  
  const rules = {
    account: [
      { required: true, message: '姓名必填', type: 'error', trigger: 'blur' },
      { required: true, message: '姓名必填', type: 'error', trigger: 'change' },
      { whitespace: true, message: '姓名不能为空' },
      { min: 3, message: '输入字数应在3到6之间', type: 'error', trigger: 'blur' },
      { max: 6, message: '输入字数应在3到6之间', type: 'error', trigger: 'blur' },
    ],
    password: [{ required: true, message: '密码必填', type: 'error' }],
  };
  


  
  const onSubmit = ({ validateResult, firstError, e }) => {
    e.preventDefault();
    if (validateResult === true) {
      MessagePlugin.success('提交成功');
    } else {
      console.log('Validate Errors: ', firstError, validateResult);
      MessagePlugin.warning(firstError);
    }
  };
  

  </script>
  <style scoped>
  .demo-select-base {
    width: 300px;
  }
  </style>
  