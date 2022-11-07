<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from "tdesign-icons-vue-next";
import Http from '../api/config'
import { useRoute } from "vue-router";
import { MessagePlugin } from 'tdesign-vue-next';

const route = useRoute();
const articleId = route.params.id;
const article = ref({})
const commentsData = ref([])
const my_name = ref(localStorage.getItem('username'))
const my_avatar = ref(localStorage.getItem('avatar'))
const subarea = ref('未定义')
const allArea = {
    学习区:'study',
    游戏区:'game',
    八卦区:'chat',
    交友区:'friend',
    活动发布区:'activity',
    闲置交易区:'buy',
    招聘求职区:'job',
    "失物招领区":'find',
}
onMounted(async () => {
    const res = await Http.get(`/postdetail/${articleId}`)
    article.value = res.data.data;
    subarea.value = allArea[article.value.subarea]
    comment.post_id = article.value.id
    refreshComments()
})

const replyData = ref('')
const router = useRouter()
const commentPage = ref(-1)
const refreshComments = async () =>{
    const cres = await Http.get(`/fetchcomment/${articleId}`)
    commentsData.value = cres.data.data
}

const comment = reactive({
    username:my_name,
    content:'',
    post_id:'',
    parent:0,
})
const submitReply = async(id)=>{
    comment.parent = id
    console.log(comment.post_id)
    const res = await Http.post('/savecomment',comment)
    if (res.data.code == 1) {
        MessagePlugin.success("评论成功")
        commentPage.value = -1
        refreshComments()
      } else {
        MessagePlugin.error(res.data.message)
      }
      
}
</script>
<template>
    <div class="container">
        <!-- 面包屑 -->
        <div style="border-bottom:1px solid #e7e7e7;font-size: 30px;">
            <t-breadcrumb>
                <t-breadcrumbItem :router="router" :to="{ path: '/' }">
                    <t-icon name="books" />首页
                </t-breadcrumbItem>
                <t-breadcrumbItem :router="router" :to="'/area/'+ subarea">
                    <t-icon name="books" />{{ article.subarea }}
                </t-breadcrumbItem>
                <t-breadcrumbItem>
                    <t-icon name="books" />查看内容
                </t-breadcrumbItem>
            </t-breadcrumb>
        </div>

        <!-- 内容区 -->
        <div>
            <h2 style="border-bottom:1px solid #e7e7e7;padding-left: 10px;padding-bottom: 10px;">{{ article.title }}
            </h2>
            <div style="display: flex;padding-left: 24px;padding-right: 24px;padding-bottom: 24px;">
                <div style="padding-right: 24px;">
                    <t-avatar :image="article.avatar" size="60px" />
                </div>
                <div>
                    <div class="time">
                        <span style="font-weight: bold;">{{ article.author }}</span>
                        <span>
                            <t-tag theme="warning">楼主</t-tag>
                        </span>
                        <span style="color:#96999f;font-size: 12px;">{{ article.date }}</span>
                    </div>
                    <div>
                        {{ article.content }}
                        <div>
                            <img :src="article.Cover" />
                        </div>
                    </div>
                    <div class="buttons">
                        <t-button variant="text" theme="default">
                            <div style="display:flex;align-items: center;">
                                <icon name="thumb-up" size="20px" />推荐({{ article.like }})
                            </div>
                        </t-button>
                        <t-button variant="text" theme="default" @click="commentPage = (commentPage == -2) ? -1 : -2">
                            <div style="display:flex;align-items: center;">
                                <icon name="chat" size="20px" />评论({{ article.comment_num }})
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
            <t-comment :avatar="my_avatar"
                style="padding-left: 28px;padding-right: 20px;padding-top: 20px;"
                :author="my_name">
                <template #content>
                    <div class="form-container">
                        <t-textarea v-model="comment.content" placeholder="快来抢热评" />
                        <t-button class="form-submit" @click="submitReply(0)">回复</t-button>
                    </div>
                </template>
            </t-comment>
        </div>

        <!-- 评论区 -->
        <div style="border-top:1px solid #e7e7e7;">
            <t-list :split="true">
                <t-list-item v-for="(item, index) in commentsData" :key="index">
                    <template #content>
                        <t-comment :avatar="item.avatar" :datetime="item.date"
                            :content="item.content">
                            <template #author>

                                <span >{{ item.username }}</span>
                                <span style="margin-left:5px" v-if="item.username == article.author">
                                    <t-tag theme="warning" size="small">楼主</t-tag>
                                </span>
                            </template>
                            <template #actions>
                                <t-space key="thumbUp" :size="6">
                                    <t-icon name="thumb-up" />
                                    <span>6</span>
                                </t-space>
                                <t-space key="chat" :size="6" @click="commentPage = (commentPage === index) ? -1 : index">
                                    <t-icon name="chat" />
                                    <span>回复</span>
                                </t-space>
                            </template>
                            <template v-if="commentPage === index || item.children.length" #reply>
                                <t-comment v-for="val in item.children"
                                    :avatar="val.avatar" :datetime="val.date"
                                    :content="val.content">
                                    <template #author>
                                        <t-space :size="4">
                                            <span>{{ val.username }}</span>
                                <span style="margin-left:5px" v-if="val.username  == article.author">
                                    <t-tag theme="warning" size="small">楼主</t-tag>
                                </span>
                                            <t-icon name="caret-right-small" size="small" />
                                            <span>{{ item.username }}</span>
                                            <span style="margin-left:5px" v-if="item.username  == article.author">
                                    <t-tag theme="warning" size="small">楼主</t-tag>
                                </span>
                                        </t-space>
                                    </template>
                                    <template v-if="commentPage === val.id" #reply>
                                        <div>
                                            <t-comment :avatar="my_avatar" :author="my_name">
                                                <template #content>
                                                    <div class="form-container">
                                                        <t-textarea v-model="comment.content" placeholder="快来抢热评" />
                                                        <t-button class="form-submit" @click="submitReply(val.id)">回复</t-button>
                                                    </div>
                                                </template>
                                            </t-comment>
                                        </div>
                                    </template>

                                    <template #actions>
                                        <t-space key="thumbUp" :size="6">
                                            <t-icon name="thumb-up" />
                                            <span>6</span>
                                        </t-space>
                                        <t-space key="chat" :size="6"
                                            @click="commentPage = (commentPage === val.id) ? -1 : val.id">
                                            <t-icon name="chat" />
                                            <span>回复</span>
                                        </t-space>
                                    </template>
                                </t-comment>
                                <div v-if="commentPage === index">
                                    <t-comment :avatar="my_avatar" :author="my_name">
                                        <template #content>
                                            <div class="form-container">
                                                <t-textarea v-model="comment.content" placeholder="快来抢热评" />
                                                <t-button class="form-submit" @click="submitReply(item.id)">回复</t-button>
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