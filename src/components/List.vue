<script setup>
import { ref, onMounted } from "vue";
import Http from "../api/config";
import { Icon } from "tdesign-icons-vue-next";

const value1 = ref("first");
const list = ref([]);

const init = async () => {
  const res = await Http.get("/hot");
  list.value = res.data.data;
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
        <!-- <t-list-item-meta id="text" :title=item.title :description=item.content /> -->
        <template #content>
          <div class="list-content">
            <div class="title">
              {{ item.title }}
            </div>
            <div style="color: #555666">
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
                {{ item.comment }}
              </t-button>
              <t-avatar
                image="https://tdesign.gtimg.com/site/avatar.jpg"
                size="small"
              />
              <span style="color: #555666"> {{ " " + item.username }}</span>
            </div>
          </div>
        </template>
        <template #action>
          <t-image
            src="https://tu.my/i/2022/11/02/63623f750e70b.png"
            fit="contain"
            :style="{ height: '80px' }"
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
