<template>
    <div class="topnav">
        <ul>
            <li class="rgbn">
                <button class="regbtn">注册</button>
                <button class="loginbtn">登录</button>
            </li>
            <li v-for="(item,index) in list" :key="index" @click="topath(item.pathname,item.name)">
                {{item.name}} <i class="fa fa-angle-right fr"></i>    
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:'TopNav',
    data(){
        return {
            list:[{name:'最新',pathname:'New'},{name:'热门',pathname:'Hot'},{name:'发现',pathname:'Find'}]
        }
    },
    computed:{
        navshow(){return this.$store.state.navShow}
    },
    methods:{
        topath(path,name){
            console.log(name);
            this.$store.commit('changenavShow',false);
            this.$router.push({path:path,params:{_name:name}})
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
.topnav{
    .w(375);
    // background: rgba(51,51,51,.95);
    background: @h-ft-color;
    position: fixed;
    z-index: 19;
    .top(46);
    
    ul{
        .rgbn{
            .padding(20,20,20,20);
            .h(55);
            button{
                display: inline-block;
                .h(36);
                .lh(36);
                .fs(16);
            }
            .regbtn{
                .w(190);
                background: #E53E49;
                text-align: center;
                // box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 1px 0 rgba(255,255,255,.3);
                // text-shadow: 0 -1px 0 rgba(0,0,0,.1);
                color: #fff;
                .margin(0,10,0,0);
                border: 1px solid #C90000;
            }
            .loginbtn{
                .w(110);
                border:1px solid #D9D9D9;
                color: @h-ft-color;
                .margin(0,0,0,7);
            }
        }
        //li
        li{
            border-bottom:1px solid #3B3B3B; 
            // border-shadow:0 1px 1px #363636 inset; 
            .padding(0,20,0,20);
            .h(45);
            .lh(45);
                .fs(16);
                color: @a-ft-color;
                i{
                    .lh(45);
                }
        }
    }
}
</style>


