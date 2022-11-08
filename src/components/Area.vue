<script setup>
    import List from "./List.vue";
    import { useRoute } from "vue-router";
    const route = useRoute();
    const areaName = route.params.id;
    const areaList={
        study:{
            url:'/photo/study.jpg',
            name:'学习区',
            title:'一起来学习吧'
        },
        game:{
            url:'/photo/game.jpg',
            name:'游戏区',
            title:'属于游戏玩家的大本营'
        },
        chat:{
            url:'/photo/chat.jpg',
            name:'八卦区',
            title:'最新、最精彩的校园趣事'
        },
        friend:{
            url:'/photo/friend.jpg',
            name:'交友区',
            title:'交友，聊天，分享百态生活'
        },
        activity:{
            url:'/photo/activity.jpg',
            name:'活动发布区',
            title:'汇总各种校园活动'
        },
        buy:{
            url:'/photo/buy.jpg',
            name:'闲置交易区',
            title:'二手闲置物品交流平台'
        },
        job:{
            url:'/photo/job.jpg',
            name:'招聘求职区',
            title:'让同学们都找到满意的工作'
        },
        find:{
            url:'/photo/find.jpg',
            name:'失物招领区',
            title:'在这里找回你遗失的Ta'
        },

    }
    const nowArea = areaList[areaName]
    
</script>
<template>
    <div class="container">
        <t-card>
            <div style="display: flex">
                <img :src=nowArea.url style="max-width: 180px;border: 1px solid darkgray;padding: 2px;border-radius:2px" />
                <div style="display: flex;flex-direction: column;justify-content: end;margin-left: 10px;">
                    <div style="font-size: 22px;text-align: start;">{{nowArea.name}}</div>
                    <div style="font-size: 14px;">{{nowArea.title}}</div>
                </div>
            </div>
        </t-card>
        <List :areaName=nowArea.name method=2 />
    </div>
</template>
<style scoped>
.container {
    max-width: 1280px;
    margin: 0 auto;
}
</style>
