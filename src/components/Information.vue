<script setup>
import {useRouter} from "vue-router"
const router = useRouter()
</script>
<template>
<div class="page-content">
    <div class="board-body">
      <div >
            <t-breadcrumb>
                <t-breadcrumbItem :router="router" :to="{ path: '/' }">
                    <t-icon name="books" />首页
                </t-breadcrumbItem>
                <t-breadcrumbItem>
                    <t-icon name="books" />信息公告
                </t-breadcrumbItem>
            </t-breadcrumb>
        </div>
        <ul class="list-content">
            <li class="list-item">
              <img src="photo/zhiding.png" style="width:40px;margin-left: 20px;" />
                <a href="https://www.ujs.edu.cn/info/1062/31829.htm" target="_blank"  class="post-link" >
                    省政府参事调研组来校调研</a>
            </li>
            <li class="list-item">
              <img src="photo/zhiding.png" style="width:40px;margin-left: 20px;" />
                <a href="https://www.ujs.edu.cn/info/1062/31809.htm"  target="_blank" class="post-link" >
                    全国大学生先进成图技术与产品信息建模创新大赛举办</a>
            </li>
            <li class="list-item">
              <img src="photo/zhiding.png" style="width:40px;margin-left: 20px;" />
                <a href="https://www.ujs.edu.cn/info/1062/31789.htm"  target="_blank"  class="post-link" >
                    我校应邀参加中国农业工程学会农业水土工程专业...</a>
            </li>
            <li class="list-item">
              <div style="width: 40px;margin-left: 20px;">
                <img src="photo/baokuan.png" style="width:25px" />
              </div>
                <a href="https://www.ujs.edu.cn/info/1062/31769.htm"  target="_blank"  class="post-link">
                    校田径队在省运会高校赛中实现大满贯</a>
            </li>
            <li class="list-item">
              <div style="width: 40px;margin-left: 20px;">
                <img src="photo/baokuan.png" style="width:25px" />
              </div>
                <a href="https://www.ujs.edu.cn/info/1062/31729.htm"  target="_blank"  class="post-link">
                    新型国产高速犁在新疆试验成功</a>
            </li>
            <li class="list-item">
              <div style="width: 40px;margin-left: 20px;">
                <img src="photo/baokuan.png" style="width:25px" />
              </div>                <a href="https://www.ujs.edu.cn/info/1062/31829.htm"  target="_blank"  class="post-link" >
                    省政府参事调研组来校调研</a>
            </li>
            <li class="list-item">
                <span class="iconfont "></span>
                <a href="https://www.ujs.edu.cn/info/1062/31809.htm"  target="_blank"  class="post-link" >
                    全国大学生先进成图技术与产品信息建模创新大赛举办</a>
            </li>
            <li class="list-item">
                <span class="iconfont "></span>
                <a href="https://www.ujs.edu.cn/info/1062/31789.htm"  target="_blank"  class="post-link" >
                    我校应邀参加中国农业工程学会农业水土工程专业...</a>
            </li>
            <li class="list-item">
                <span class="iconfont "></span>
                <a href="https://www.ujs.edu.cn/info/1062/31769.htm"  target="_blank"  class="post-link">
                    校田径队在省运会高校赛中实现大满贯</a>
            </li>
            <li class="list-item">
                <span class="iconfont "></span>
                <a href="https://www.ujs.edu.cn/info/1062/31729.htm"  target="_blank"  class="post-link">
                    新型国产高速犁在新疆试验成功</a>
            </li>
            <li class="list-item">
                <span class="iconfont "></span>
                <a href="https://www.ujs.edu.cn/info/1062/31829.htm"  target="_blank"  class="post-link" >
                    省政府参事调研组来校调研</a>
            </li>
            <li class="list-item">
                <span class="iconfont "></span>
                <a href="https://www.ujs.edu.cn/info/1062/31809.htm"  target="_blank"  class="post-link" >
                    全国大学生先进成图技术与产品信息建模创新大赛举办</a>
            </li>
            <li class="list-item">
                <span class="iconfont "></span>
                <a href="https://www.ujs.edu.cn/info/1062/31789.htm"   target="_blank"  class="post-link" >
                    我校应邀参加中国农业工程学会农业水土工程专业...</a>
            </li>
            <li class="list-item">
                <span class="iconfont "></span>
                <a href="https://www.ujs.edu.cn/info/1062/31769.htm"  target="_blank"  class="post-link">
                    校田径队在省运会高校赛中实现大满贯</a>
            </li>
            <li class="list-item">
                <span class="iconfont "></span>
                <a href="https://www.ujs.edu.cn/info/1062/31729.htm"  target="_blank"  class="post-link">
                    新型国产高速犁在新疆试验成功</a>
            </li>
        </ul>
    </div>
</div>


</template>
<style scoped>
.left-nav {
  width: 180px;
  height: 100%;
  position: fixed;
  border-top: none;
  border-left: none;
  z-index: 9999;
}
.left-nav .logo {
  width: 180px;
  height: 160px;
  vertical-align: center;
}
.left-nav .user-info {
  width: 180px;
  height: 100%;
  background-color: #3d474b;
  border-top: 2px #333333 solid;
}
.left-nav .user-info .portrait-container {
  width: 110px;
  height: 110px;
  margin: 0 auto;
  margin-top: 30px;
}
.left-nav .user-info .input-wrapper {
  padding: 5px;
}
.left-nav .user-info .input-wrapper label {
  display: block;
  margin-top: -25px;
  margin-left: 30px;
  font-size: 15px;
  font-family: 华文行楷;
  line-height: 31px;
  color: #ffffff;
}
.left-nav .user-info .input-wrapper:hover {
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.2);
}
.left-nav .user-info .btn-group {
  display: block;
  margin: auto 50px;
  padding-top: 10px;
}
.left-nav .user-info .btn-group #btn-login {
  background-color: #e97c62;
  margin-right: 10px;
  border-radius: 10%;
}
.left-nav .user-info .btn-group #btn-register {
  background-color: #5cae97;
  border-radius: 10%;
}
.top-nav {
  background-color: #ffffff;
  position: relative;
  height: 80px;
  border-bottom: 1px solid #DBDBDB;
  z-index: 999;
}
.top-nav .top-wrapper {
  position: absolute;
  left: 180px;
  width: 70%;
  height: 100%;
  line-height: 80px;
}
.top-nav .top-wrapper .top-list {
  display: flex;
  justify-content: space-around;
}
.top-nav .top-wrapper .top-list a {
  display: block;
  color: #363636;
}
.top-nav .top-wrapper .top-list a:hover {
  background-color: #696969;
  color: #5cae97;
}
.top-nav .search-box {
  position: absolute;
  right: 20px;
  line-height: 80px;
}
.top-nav .search-box .search-btn {
  box-sizing: border-box;
  height: 30px;
  width: 250px;
  font-size: 12px;
  border: 1px solid black;
  border-right: none;
  border-width: 1px;
}
.top-nav .search-box .iconfont {
  margin-left: -6px;
  padding: 7px;
  padding-top: 4px;
  padding-bottom: 8px;
  border: 1px solid black;
  border-left: none;
  background-color: white;
}
.page-home {
  background-color: #f7f9fb;
  position: relative;
  left: 180px;
  margin-right: 180px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.page-home .bar {
  width: 600px;
  height: 400px;
  position: relative;
  border: 2px #333333 dashed;
  margin-top: 20px;
}
.page-home .bar .title {
  position: absolute;
  top: 10%;
  left: 45%;
}
.page-home .bar .title .name {
  font: small-caps bold 24px/1 sans-serif;
  font-size: 20px;
}
.page-home .bar ul {
  position: absolute;
  top: 90px;
  left: 90px;
}
.page-home .bar ul li {
  margin-top: 15px;
}
.page-home .bar ul li .icon-baokuan- {
  color: red;
}
.page-home .information-bar1 {
  border: 3px solid #eeeeee;
  border-top: 4px rgba(233, 124, 98) solid;
}
.page-home .information-bar2 {
  border: 3px solid #eeeeee;
  border-top: 4px #5cae97 solid;
}
.page-home .information-bar3 {
  border: 3px solid #eeeeee;
  border-top: 4px #f8d0ab solid;
}
.page-home .information-bar4 {
  border: 3px solid #eeeeee;
  border-top: 4px #e97c62 solid;
}
.page-content {
  display: flex;
  height: 80px;
}
.page-content .breadcrumb-trail {
  margin: auto 300px;
  font-size: 11px;
}
.page-content .breadcrumb-trail a {
  color: #535353;
  margin-right: 5px;
}
.page-content .breadcrumb-trail a:after {
  content: ">>";
  color: #ccc;
}
.page-content .board-body {
  position: absolute;
  top: 80px;
  left: 200px;
  width: 75%;
  border: 1px solid #eeeeee;
  border-top: 4px solid #ea6242;
}
.page-content .board-body .list-content  {
  border-bottom: 2px solid #80b9f2;
  display: block;
  height: 40px;
  margin-top: 30px;
  line-height: 30px;
  font-size: 23px;
}
.list-item{
  border-bottom: 2px solid #80b9f2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  margin-top: 30px;
  line-height: 30px;
  font-size: 23px;
}
.page-content .board-body .list-content .list-item .iconfont {
  color: red;
}
.page-content .board-body .list-content .list-item a {
  padding-left: 20px;
}
.page-content .board-body .list-content .list-item:hover {
  background-color: #eeeeee;
}
/*# sourceMappingURL=index.css.map */


/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/*# sourceMappingURL=reset.css.map */


.clearfix::before,
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
a {
  text-decoration: none;
  color: #333333;
}
body {
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #333;
  min-width: 1226px;
}
.w {
  width: 1226px;
  margin: 0 auto;
}
/*# sourceMappingURL=base.css.map */
</style>