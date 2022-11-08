<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from "tdesign-icons-vue-next";
import Http from '../api/config'
import { useRoute } from "vue-router";
import { MessagePlugin } from 'tdesign-vue-next';
import time from "../time/index"
import { BrowseIcon } from 'tdesign-icons-vue-next';



const route = useRoute();
const articleId = route.params.id;
const article = ref({
    pictures:[]
})
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
    replyto:''
})
const submitReply = async(id,name)=>{
    comment.parent = id
    comment.replyto = name
    const res = await Http.post('/savecomment',comment)
    if (res.data.code == 1) {
        MessagePlugin.success("评论成功")
        commentPage.value = -1
        refreshComments()
      } else {
        MessagePlugin.error(res.data.message)
      }
      
}

// 图片预览

const visible = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const onOpen = () => (visible.value = true);
const onOpen2 = () => (visible2.value = true);
const onOpen3 = () => (visible3.value = true);
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
                        <span style="color:#96999f;font-size: 12px;">{{ time.formatTime(article.date) }}</span>
                    </div>
                    <div>
                        {{ article.content }}
                              <!-- 图片预览器 -->

                        <div>
                            <div>
    <t-image-viewer v-if="article.pictures.length>0" :key="img1" v-model:visible="visible" :default-index="0" :images="article.pictures">
      <template #trigger>
        <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
          <img alt="test" :src="article.pictures[0]" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="onOpen">
            <span><BrowseIcon size="1.4em" /> 预览</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
    <t-image-viewer v-if="article.pictures.length>1" :key="1" v-model:visible="visible2" :default-index="1" :images="article.pictures">
      <template #trigger>
        <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
          <img alt="test" :src="article.pictures[1]" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="onOpen2">
            <span><BrowseIcon size="1.4em" /> 预览</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
    <t-image-viewer v-if="article.pictures.length>2" :key="2" v-model:visible="visible3" :default-index="2" :images="article.pictures">
      <template #trigger>
        <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
          <img alt="test" :src="article.pictures[2]" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="onOpen3">
            <span><BrowseIcon size="1.4em" /> 预览</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>

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
                        <t-button class="form-submit" @click="submitReply(0,null)">回复</t-button>
                    </div>
                </template>
            </t-comment>
        </div>

        <!-- 评论区 -->
        <div style="border-top:1px solid #e7e7e7;">
            <t-list :split="true">
                <t-list-item v-for="(item, index) in commentsData" :key="index">
                    <template #content>
                        <t-comment :avatar="item.avatar" :datetime="time.formatTime(item.date)"
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
                                    :avatar="val.avatar" :datetime="time.formatTime(val.date)"
                                    :content="val.content">
                                    <template #author>
                                        <t-space :size="4">
                                            <span>{{ val.username }}</span>
                                <span style="margin-left:5px" v-if="val.username  == article.author">
                                    <t-tag theme="warning" size="small">楼主</t-tag>
                                </span>
                                            <t-icon name="caret-right-small" size="small" />
                                            <span>{{ val.replyto }}</span>
                                            <span style="margin-left:5px" v-if="val.replyto  == article.author">
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
                                                        <t-button class="form-submit" @click="submitReply(item.id,val.username)">回复</t-button>
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
                                                <t-button class="form-submit" @click="submitReply(item.id,item.username)">回复</t-button>
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

/* 图片预览器样式 */
.tdesign-demo-image-viewer__ui-image {
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}

/*    -------- */


</style>