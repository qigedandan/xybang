<script setup>
import { ref, onMounted } from "vue";
import Http from "../api/config";
import { Icon } from "tdesign-icons-vue-next";
import { useRouter } from "vue-router";
import time from "../time/index"

const props = defineProps({
  method: Number,
  areaName: String
})

const value1 = ref("first");
const list = ref([]);
const router = useRouter()

const init = async () => {
  if(props.method == 1){
    const res = await Http.get("/hot");
    list.value = res.data.data;

  }
  if(props.method == 2){
    const res = await Http.post('/subarea',{
    subarea:props.areaName,
    page:0,
    pagesize:100
  });
  list.value = res.data.data;

  }
  if(props.method == 3){
    const res = await Http.post('/myposts',{
    page:0,
    pagesize:100
  });
  list.value = res.data.data;

  }
};

onMounted(async () => {
  init();
});
</script>
<template>
  <div>
    <t-tabs v-model="value1">
      <t-tab-panel value="first" label="推荐"> </t-tab-panel>
      <t-tab-panel value="second" label="最新"> </t-tab-panel>
      <t-tab-panel value="third" label="热门"> </t-tab-panel>
    </t-tabs>
  </div>
  <div class="list">
    <t-list :split="true">
      <t-list-item v-for="item in list">
        <template #content>
          <div class="list-content">
            <div class="title" style="cursor: pointer;" @click="router.push(`/article/${item.id}`)">
              {{ item.title }} 
              <span style="color:#96999f;font-size: 14px;font-weight: 400;">{{ time.formatTime(item.date) }}</span>

            </div>
            <div style="color: #555666;cursor: pointer;" @click="router.push(`/article/${item.id}`)">
              {{ item.mini_content }}
            </div>
            <div class="button">
              <t-button
                variant="text"
                class="right_button"
                style="cursor: default"
              >
                <icon name="browse" size="large" />
                {{ item.view }}
              </t-button>
              <t-button variant="text" class="right_button">
                <icon name="thumb-up" size="large" />
                {{ item.like }}
              </t-button>
              <t-button variant="text" class="right_button">
                <icon name="chat" size="large" />
                {{ item.comment_num }}
              </t-button>
              <t-avatar
                :image="item.avatar"
                size="small"
              />
              <span style="color: #555666"> {{ " " + item.author }}</span>
            </div>
          </div>
        </template>
        <template v-if="item.cover" #action>
          <t-image
            :src=(item.cover)
            fit="contain"
            style="height:80px;border: 1px solid #efefef;"
          />
        </template>
      </t-list-item>
    </t-list>
  </div>
</template>
<style scoped>
.right_button {
  right: 14px;
}

.title {
  font-size: 16px;
  font-weight: 700;
}

.list-content {
  text-align: left;
  max-width: 1138px-181px;
}

</style>
