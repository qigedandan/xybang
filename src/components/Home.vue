<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue";
import List from "./List.vue";
import {useRouter} from "vue-router"

const card_style = ref({ width: "150px" });
const router = useRouter()
const areaList={
        study:{
            url:'/photo/study.jpg',
            name:'学习区',
            title:'一起来学习吧'
        },
        game:{
            url:'/photo/game.jpg',
            name:'游戏区',
            title:'一起来学习吧'
        },
        chat:{
            url:'/photo/chat.jpg',
            name:'八卦区',
            title:'一起来学习吧'
        },
        friend:{
            url:'/photo/friend.jpg',
            name:'交友区',
            title:'一起来学习吧'
        },
        activity:{
            url:'/photo/activity.jpg',
            name:'活动发布区',
            title:'一起来学习吧'
        },
        buy:{
            url:'/photo/buy.jpg',
            name:'闲置交易区',
            title:'一起来学习吧'
        },
        job:{
            url:'/photo/job.jpg',
            name:'招聘求职区',
            title:'一起来学习吧'
        },
        find:{
            url:'/photo/find.jpg',
            name:'失物招领区',
            title:'一起来学习吧'
        },

    }
const goToArea = (area)=>{
  router.push('/area/'+area)
}
</script>

<template>
  <div class="container">
    <!-- 内容分区 -->
    <div class="area">
      <t-card
      v-for="(val,key) in areaList"
        :cover=val.url
        theme="poster2"
        :style="card_style"
        style="cursor: pointer"
        @click="goToArea(key)"
      >
        <template #footer> {{val.name}} </template>
      </t-card>
    </div>
    <List method=1 />

    <!-- 注册登录弹出框 -->
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

.area {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

:deep(.area > .t-card) {
  cursor: pointer;
}
</style>
