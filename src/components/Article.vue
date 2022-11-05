<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from "tdesign-icons-vue-next";


const replyData = ref('')
const router = useRouter()
const commentsData = [
    {
        id: 'A',
        avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        author: '评论作者名A',
        datetime: '今天16:38',
        content: '评论作者名A写的评论内容。',
    },
    {
        id: 'B',
        avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        author: '评论作者名B',
        datetime: '今天16:38',
        content: '评论作者名B写的评论内容。',
    },
    {
        id: 'C',
        avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        author: '评论作者名C',
        datetime: '今天16:38',
        content: '评论作者名C写的评论内容。',
    },
];

const commentPage = ref(-1) 
</script>
<template>
    <div class="container">
        <!-- 面包屑 -->
        <div style="border-bottom:1px solid #e7e7e7;font-size: 30px;">
            <t-breadcrumb>
                <t-breadcrumbItem :router="router" :to="{ path: '/' }">
                    <t-icon name="books" />首页
                </t-breadcrumbItem>
                <t-breadcrumbItem :router="router" to="/area/study">
                    <t-icon name="books" />学习区
                </t-breadcrumbItem>
                <t-breadcrumbItem>
                    <t-icon name="books" />查看内容
                </t-breadcrumbItem>
            </t-breadcrumb>
        </div>

        <!-- 内容区 -->
        <div>
            <h2 style="border-bottom:1px solid #e7e7e7;padding-left: 10px;padding-bottom: 10px;">牙膏，果子，黑天使，这三个中单历史顺位怎么排
            </h2>
            <div style="display: flex;padding-left: 24px;padding-right: 24px;padding-bottom: 24px;">
                <div style="padding-right: 24px;">
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg" size="60px" />
                </div>
                <div>
                    <div class="time">
                        <span style="font-weight: bold;">作者名称</span>
                        <span>
                            <t-tag theme="warning">楼主</t-tag>
                        </span>
                        <span style="color:#96999f;font-size: 12px;">2022-11-05 14:58:07</span>
                    </div>
                    <div>
                        二胎先锁定第一第二了，那剩下这三个呢，谁强？
                    </div>
                    <div class="buttons">
                        <t-button variant="text" theme="default">
                            <div style="display:flex;align-items: center;">
                                <icon name="thumb-up" size="20px" />推荐
                            </div>
                        </t-button>
                        <t-button variant="text" theme="default" @click="commentPage=-2">
                            <div style="display:flex;align-items: center;">
                                <icon name="chat" size="20px" />评论(14)
                            </div>
                        </t-button>
                        <t-button variant="text" theme="default">
                            <div style="display:flex;align-items: center;">
                                <icon name="jump" size="20px" />分享
                            </div>
                        </t-button>
                    </div>
                </div>

            </div>
        </div>

        <div v-if="commentPage == -2" style="border-top:1px solid #e7e7e7">
            <t-comment avatar="https://tdesign.gtimg.com/site/avatar.jpg"
                style="padding-left: 28px;padding-right: 20px;padding-top: 20px;">
                <template #content>
                    <div class="form-container">
                        <t-textarea v-model="replyData" placeholder="快来抢热评" />
                        <t-button class="form-submit" @click="submitReply">回复</t-button>
                    </div>
                </template>
            </t-comment>
        </div>

        <!-- 评论区 -->
        <div style="border-top:1px solid #e7e7e7;">
            <t-list :split="true">
                <t-list-item v-for="(item, index) in commentsData" :key="index">
                    <template #content>
                        <t-comment :avatar="item.avatar" :author="item.author" :datetime="item.datetime"
                            :content="item.content">
                            <template #actions>
                                <t-space key="thumbUp" :size="6">
                                    <t-icon name="thumb-up" />
                                    <span>6</span>
                                </t-space>
                                <t-space key="chat" :size="6" @click="commentPage=index">
                                    <t-icon name="chat" />
                                    <span>回复</span>
                                </t-space>
                            </template>
                            <template #reply>
                                <t-comment avatar="https://tdesign.gtimg.com/site/avatar.jpg" datetime="今天 16:38"
                                    content="这里是评论者写的评论内容。">
                                    <template #author>
                                        <t-space :size="4">
                                            <span>评论作者名B</span>
                                            <t-icon name="caret-right-small" size="small" />
                                            <span>评论作者名A</span>
                                        </t-space>
                                    </template>

                                    <template #actions>
                                        <t-space key="thumbUp" :size="6">
                                            <t-icon name="thumb-up" />
                                            <span>6</span>
                                        </t-space>
                                        <t-space key="chat" :size="6">
                                            <t-icon name="chat" />
                                            <span>回复</span>
                                        </t-space>
                                    </template>
                                </t-comment>
                                <t-comment avatar="https://tdesign.gtimg.com/site/avatar.jpg" datetime="今天 16:38"
                                    content="这里是评论者写的评论内容。">
                                    <template #author>
                                        <t-space :size="4">
                                            <span>评论作者名B</span>
                                            <t-icon name="caret-right-small" size="small" />
                                            <span>评论作者名A</span>
                                        </t-space>
                                    </template>

                                    <template #actions>
                                        <t-space key="thumbUp" :size="6">
                                            <t-icon name="thumb-up" />
                                            <span>6</span>
                                        </t-space>
                                        <t-space key="chat" :size="6">
                                            <t-icon name="chat" />
                                            <span>回复</span>
                                        </t-space>
                                    </template>
                                </t-comment>
                                <div v-if="commentPage === index">
            <t-comment avatar="https://tdesign.gtimg.com/site/avatar.jpg">
                <template #content>
                    <div class="form-container">
                        <t-textarea v-model="replyData" placeholder="快来抢热评" />
                        <t-button class="form-submit" @click="submitReply">回复</t-button>
                    </div>
                </template>
            </t-comment>
        </div>
                            </template>
                        </t-comment>
                    </template>

                </t-list-item>
            </t-list>
        </div>

        <!-- 评论框 -->

    </div>
</template>
    

<style scoped>
.container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    /* padding: 2rem; */
    text-align: start;
    background-color: white;
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

}

.form-submit {
    margin-top: 8px;
}


.buttons {
    margin-top: 10px;
}

:deep(.buttons>.t-button) {
    margin-right: 20px;
}

.time>span {
    margin-right: 10px;
}
</style>