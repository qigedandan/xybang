<script setup>
import { onMounted, reactive, ref } from "vue";
import Http from "../api/config";
import { MessagePlugin } from "tdesign-vue-next";


const userInfo = ref({});

onMounted(async () => {
  const res = await Http.get("/userinfo");
  if (res.data.code == 1) {
    userInfo.value = res.data.data;
  } else {
    MessagePlugin.error(res.data.message);
  }
});

const edit = ref(false);

//图片上传

const file1 = ref([]);
const uploadRef1 = ref();
const handleFail = ({ file }) => {
  MessagePlugin.error(`文件 ${file.name} 上传失败`);
};
const formatRes = (response) => {
  console.log(response.message);
  userInfo.value.avatar = response.message;
  return { url: response.message };
};
const Token = localStorage.getItem("token");

//
const visible = ref(false);

const onVisibleChange = (val, context = {}) => {
  if (context && context.trigger === 'confirm') {
    console.log('提交')
  } else {
    console.log('取消')
  }
}

const submit = async()=>{
  const res = await Http.put('/changeinfo',
  {
    introduction:userInfo.value.introduction,
    avatar:userInfo.value.avatar,
    sex:userInfo.value.sex,
    age:userInfo.value.age,
  }
  )
  if (res.data.code == 1) {
        MessagePlugin.success("修改成功")
      } else {
        MessagePlugin.error(res.data.message)
      }

}
</script>
<template>
  <t-card header-bordered>
    <template #header>
      <div class="header">
        <div style="font-size: 20px; font-weight: bold">基本信息</div>
        <div>
          <t-button
            @click="
              () => {
                edit = !edit;
              }
            "
            >编辑资料</t-button
          >
        </div>
      </div>
    </template>
    <div v-show="!edit">
      <t-list size="medium">
        <t-list-item>
          <div class="list">
            <div class="item">头像</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <t-avatar
              :image="userInfo.avatar"
              size="80px"
            />
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">用户昵称</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div>{{ userInfo.username }}</div>
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">用户ID</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div>{{ userInfo.id }}</div>
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">性别</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div>{{ userInfo.sex }}</div>
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">年龄</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div>{{ userInfo.age }}</div>
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">个人简介</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div>{{ userInfo.introduction }}</div>
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">文章数量</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div>{{ userInfo.postnum }}</div>
          </div>
        </t-list-item>
      </t-list>
    </div>
    <div v-show="edit == true">
      <t-list size="medium">
        <t-list-item>
          <div class="list">
            <div class="item">头像</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <t-upload
              ref="uploadRef1"
              v-model="file1"
              action="http://121.4.57.111:8086/upload"
              :headers="{ Token: Token }"
              theme="image"
              accept="image/*"
              :disabled="disabled"
              :auto-upload="autoUpload"
              :formatResponse="formatRes"
              :upload-all-files-in-one-request="uploadAllFilesInOneRequest"
              :locale="{
                triggerUploadText: {
                  image: '请选择图片',
                },
              }"
              @fail="handleFail"
            ></t-upload>
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">用户昵称</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div>
              <t-input
                v-model="userInfo.username"
                :maxlength="20"
                :minlength="3"
                show-limit-number
                placeholder="请输入新昵称"
              />
            </div>
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">用户ID</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div>{{ userInfo.id }}</div>
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">性别</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div>
              <t-radio-group v-model="userInfo.sex">
                <t-radio value="女">女</t-radio>
                <t-radio value="男">男</t-radio>
              </t-radio-group>
            </div>
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">年龄</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div><t-input-number v-model="userInfo.age" /></div>
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">个人简介</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div>
              <t-textarea
                v-model="userInfo.introduction"
                placeholder="请输入内容"
              />
            </div>
          </div>
        </t-list-item>
        <t-list-item>
          <div class="list">
            <div class="item">文章数量</div>
            <div style="margin-left: 5px; margin-right: 5px">:</div>
            <div>{{ userInfo.postnum }}</div>
          </div>
        </t-list-item>
      </t-list>
      <t-popconfirm v-model="visible" 
      content="是否提交资料？"
      @confirm="submit"
      >
        <t-button>编辑完成</t-button>
      </t-popconfirm>
    </div>
  </t-card>
</template>
<style scoped>
.item {
  width: 60px;
  text-align: justify;
  text-align-last: justify;
  font-weight: bold;
}

.header {
  margin-left: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
