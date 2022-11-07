<script setup>
import { ref, computed, reactive,onMounted } from 'vue'
import { Icon } from 'tdesign-icons-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import Http from '../api/config'
import { useRouter } from 'vue-router';




const form = ref(null)
const showTab = ref(1)
const isShow = computed(() => {
  if (showTab.value == 1) {
    return true
  } else {
    return false
  }
})

const visible = ref(false)
const avatar_img = ref('')
const avatar_name = ref('登录')
onMounted(()=>{
  const name =localStorage.getItem('username')
  if(name){
    avatar_name.value= name
  }
  const img = localStorage.getItem('avatar')
  if(img){
    avatar_img.value= img
  }
})
const design = () => {
  visible.value = true
}

const formData = reactive({
  username: '',
  password: '',
  password2: '',
});

const loginRules = {
  username: [
    { required: true, message: '用户名必填', type: 'error', trigger: 'blur' },
    { required: true, message: '用户名必填', type: 'error', trigger: 'change' },
    { whitespace: true, message: '用户名不能为空' },
    { min: 2, message: '输入字数应在2到10之间', type: 'error', trigger: 'blur' },
    { max: 10, message: '输入字数应在2到10之间', type: 'error', trigger: 'blur' },
  ],
  password: [{ required: true, message: '密码必填', type: 'error' }],
}

const registerRules = {
  username: [
    { required: true, message: '用户名必填', type: 'error', trigger: 'blur' },
    { required: true, message: '用户名必填', type: 'error', trigger: 'change' },
    { whitespace: true, message: '用户名不能为空' },
    { min: 2, message: '输入字数应在2到10之间', type: 'error', trigger: 'blur' },
    { max: 10, message: '输入字数应在2到10之间', type: 'error', trigger: 'blur' },
  ],
  password: [{ required: true, message: '密码必填', type: 'error' }],
  password2: [{ required: true, message: '密码必填', type: 'error' }],
  password2: [{ validator: val => formData.password2 == formData.password, message: '两次密码不一致', type: 'error', trigger: 'blur' },],
}

const onSubmit = async ({ validateResult, firstError, e }, method) => {
  e.preventDefault();
  if (validateResult === true) {
    if (method == 1) {
      const res = await Http.post('/login', {
        username: formData.username,
        password: formData.password,
      })
      if (res.data.code == 1) {
        MessagePlugin.success("登录成功")
        visible.value = false
        console.log(res.data.data.username)
        localStorage.setItem('token',res.data.message)
        avatar_name.value = res.data.data.username
        localStorage.setItem('username',res.data.data.username)
        if (res.data.data.avatar != null) {
          avatar_img.value = res.data.data.avatar
          localStorage.setItem('avatar',res.data.data.avatar)
        }
      } else {
        MessagePlugin.error(res.data.message)
      }
    } else {
      const res = await Http.post('/register', {
        username: formData.username,
        password: formData.password,
      })
      if (res.data.code == 1) {
        MessagePlugin.success("注册成功")
        showTab.value = 1
      } else {
        MessagePlugin.error(res.data.message)
      }
    }
  } else {
    console.log('Validate Errors: ', firstError, validateResult);
    MessagePlugin.warning(firstError);
  }
};

const router = useRouter()
const edit = ()=>{
  router.push('/edit')
}

const cancellation = ()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  localStorage.removeItem('avatar')
}
</script>
<template>
  <!-- 菜单栏 -->
  <div class="menu">
    <t-affix ref="affix" :offset-top="0" style="width: 100%;">
      <div style="width: 100%;background-color: white;display: flex;justify-content: center;border-bottom:1px solid #efefef">
        <t-head-menu v-model="menu1Value" width="100%" theme="light" @change="changeHandler" style="max-width: 1280px;">
          <template #logo>
            <img width="136" height='64' src="https://tu.my/i/2022/11/02/63622f8be07b3.png" alt="logo" @click="init" />
          </template>
          <t-menu-item value="item1" @click="router.push('/')">
            首页
          </t-menu-item>
          <t-menu-item value="item2"> 信息公告 </t-menu-item>
          <t-menu-item value="item4" @click="router.push('/center')"> 个人中心
             </t-menu-item>
          <t-menu-item value="item3" @click="cancellation"> 注销 </t-menu-item>


          <template #operations>
            <div class="operations">
              <div class="search">
                <t-input clearable="true" placeholder="搜索"></t-input>
                <t-button>搜索</t-button>
              </div>
              <t-avatar  :image="avatar_img" size="40px" id="design" @click="design" style="cursor:pointer">{{ avatar_name }}</t-avatar>
              <t-button shape="round" size="large" variant="text" style="background-color: #fc5531;color: white;" @click="edit">发布
              </t-button>
            </div>
          </template>
        </t-head-menu>
      </div>
    </t-affix>
  </div>
  <!-- 登录弹出框 -->
  <div>
    <t-dialog v-model:visible="visible" attach="#app" width="25%" footer=" ">

      <template #header>
        <t-tabs v-model="showTab" style="font-size: 18px;">
          <t-tab-panel value=1 label="登录">
          </t-tab-panel>
          <t-tab-panel value=0 label="注册">
          </t-tab-panel>
        </t-tabs>
      </template>
      <template #body>
        <div v-show="isShow">
          <t-form ref="loginer" :data="formData" :rules="loginRules" :colon="true" :label-width="0" @reset="onReset"
            @submit="onSubmit($event, 1)">
            <t-form-item name="username">
              <t-input v-model="formData.username" clearable placeholder="请输入账户名" size="large">
                <template #prefix-icon>
                  <t-icon name="desktop" />
                </template>
              </t-input>
            </t-form-item>
            <t-form-item name="password">
              <t-input v-model="formData.password" type="password" clearable placeholder="请输入密码" size="large">
                <template #prefix-icon>
                  <t-icon name="lock-on" />
                </template>
              </t-input>
            </t-form-item>
            <t-form-item>
              <t-button theme="primary" type="submit" block size="medium">登录</t-button>
            </t-form-item>
          </t-form>
          <div style="display: flex;justify-content: end;width: 100%;">
            <t-link theme="primary">忘记密码</t-link>
          </div>

        </div>

        <div v-show="!isShow">
          <t-form ref="form" :data="formData" :rules="registerRules" :colon="true" :label-width="0" @reset="onReset"
            @submit="onSubmit($event, 0)">
            <t-form-item name="username">
              <t-input v-model="formData.username" clearable placeholder="请输入账户名" size="large">
                <template #prefix-icon>
                  <t-icon name="desktop" />
                </template>
              </t-input>
            </t-form-item>
            <t-form-item name="password">
              <t-input v-model="formData.password" type="password" clearable placeholder="请输入密码" size="large">
                <template #prefix-icon>
                  <t-icon name="lock-on" />
                </template>
              </t-input>
            </t-form-item>
            <t-form-item name="password2">
              <t-input v-model="formData.password2" type="password" clearable placeholder="请再次输入密码" size="large">
                <template #prefix-icon>
                  <t-icon name="lock-on" />
                </template>
              </t-input>
            </t-form-item>
            <t-form-item>
              <t-button theme="primary" type="submit" block size="medium">注册</t-button>
            </t-form-item>
          </t-form>
          <div style="display: flex;justify-content: end;width: 100%;">
            <t-link theme="primary">忘记密码</t-link>
          </div>
        </div>
      </template>
    </t-dialog>
  </div>

</template>
<style scoped>
.menu {
  display: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  text-align: start;
}

.operations {
  width: 550px;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  display: flex;

}
</style>