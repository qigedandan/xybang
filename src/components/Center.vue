<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
</script>
<template>
    <div class="container">
        <div>
            <t-affix ref="affix" :offset-top="-5" :offset-bottom="20" zIndex="100">
                <t-menu theme="light" default-value="dashboard" style="margin-right: 10px" height="550px" width="230px">
                    <template #logo>
                        <img width="136" class="t-menu__logo--center" src="https://tu.my/i/2022/11/06/6366ff6b7ff0c.png"
                            alt="logo" style="margin-left: 40px;" />
                    </template>
                    <t-menu-item value="dashboard" @click="router.push('/center')">
                        <template #icon>
                            <t-icon name="dashboard" />
                        </template>
                        我的文章
                    </t-menu-item>
                    <t-menu-item value="resource" @click="router.push('/center/data')">
                        <template #icon>
                            <t-icon name="server" />
                        </template>
                        个人资料
                    </t-menu-item>
                    <t-menu-item value="root" @click="router.push('/center/collection')">
                        <template #icon>
                            <t-icon name="root-list" />
                        </template>
                        收藏
                    </t-menu-item>

                    <t-menu-item value="precise-monitor" @click="router.push('/center/attention')">
                        <template #icon>
                            <t-icon name="precise-monitor" />
                        </template>
                        我的关注
                    </t-menu-item>
                    <t-menu-item value="control-platform" >
                        <template #icon>
                            <t-icon name="control-platform" />
                        </template>
                        浏览历史
                    </t-menu-item>
                    <t-menu-item value="mail">
                        <template #icon>
                            <t-icon name="mail" />
                        </template>
                        账号设置
                    </t-menu-item>
                    <t-menu-item value="user-circle">
                        <template #icon>
                            <t-icon name="user-circle" />
                        </template>
                        我的粉丝
                    </t-menu-item>
                    <t-menu-item value="play-circle">
                        <template #icon>
                            <t-icon name="play-circle" />
                        </template>
                        视频区
                    </t-menu-item>
                    <t-menu-item value="edit1">
                        <template #icon>
                            <t-icon name="edit-1" />
                        </template>
                        资源编辑
                    </t-menu-item>
                </t-menu>
            </t-affix>
        </div>
        <div style="width:100%">
            <router-view></router-view>
        </div>
    </div>
</template>
<style scoped>
.container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    /* padding: 2rem; */
    display: flex;
    margin-top: 8px;

}
</style>