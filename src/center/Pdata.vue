<script setup>
import {ref} from 'vue'
const list = ref({
    name:{
        title:"用户昵称",
        value:""
    },
    id:{       
        title:"用户ID",
        value:""
    },
    sex:{       
        title:"性别",
        value:""
    },
    description:{
        
        title:"个人简介",
        value:""
    },
    birth:{
        title:"出生日期",
        value:""
    }
})

</script>
<template>
  <t-card title="基本信息" header-bordered >
    <t-list size="medium">
        <t-list-item>
            <div class="list">
                <t-avatar image="https://tu.my/i/2022/11/06/636725e1c53f9.jpg" size="100px" />
            </div>
          </t-list-item>
          <t-list-item>
            <div class="list">
                <div class="item">用户昵称</div>
                <div style="margin-left:5px;margin-right:5px">:</div>
                <div>七个旦旦</div>

            </div>
          </t-list-item>
          <t-list-item>
            <div  class="list">
            <div class="item">用户ID</div>
            <div style="margin-left:5px;margin-right:5px">:</div>
            <div>666</div>

            </div>      
          </t-list-item>
          <t-list-item>
            <div  class="list">
            <div class="item">性别</div>
            <div style="margin-left:5px;margin-right:5px">:</div>
            <div>男</div>
            </div>           
          </t-list-item>
          <t-list-item>
            <div  class="list">
            <div class="item">个人简介</div>  
            <div style="margin-left:5px;margin-right:5px">:</div>
            <div>保持自己的决心！</div>

            </div>       
          </t-list-item>
          <t-list-item>
            <div  class="list">
            <div class="item">出生日期</div>    
            <div style="margin-left:5px;margin-right:5px">:</div>
            <div>2001.09.07</div>
            </div>     
          </t-list-item>
        </t-list>
  </t-card>
</template>
<style scoped>

.item{
    width:60px;
    text-align: justify;
    text-align-last: justify;
}

.list{
    display: flex;
    justify-content: flex-start;
}
</style>