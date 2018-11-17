<template>
    <div class="search">
        <div class="s-top">
            <ul>
                <li class="now-on" @click="navShow=!navShow">筛选：全部（101505）<i :class="navShow?'fa fa-angle-up fr':'fa fa-angle-down fr'"></i></li>
                <li v-for="(item,index) in navList" :key="index" v-show="navShow">{{item}}</li>
            </ul>
        </div>
        <allList :new-data="true"></allList>
    </div>
</template>
<script>
import allList from './SearchList'
export default {
    name:'Search',
    data(){
        return {
            name:'这里是search',
            navList:['平面（19856）','宠物（17349）','插画/漫画（6200）','动漫（5193）','UI/UX（4558）','游戏（3097）','搞笑（2517）','工业设计（1917）','旅行（1555）','礼物（809）','居家/家装（1432）','女装/搭配',
            '手工/布艺（767）','美图（508）','美女（445）','建筑设计（418）','明星（382）','儿童（368）','生活百科','电影/图书'],
            navShow:false
        }
    },
    components:{allList}
}
</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
.search{
    .padding(45,0,0,0);
    .now-on{
        // .w(355);
        background: #fafafa;
        // .padding(0,0,0,10);
        i{
            .lh(45);
            .fs(24);
            .padding(0,20,0,0);
        }
    }
    .s-top{
       ul{
           li{
                width: 100%;
                .h(45);
                text-align: center;
                .lh(45);
                .fs(16);
                border-bottom: 1px solid #EDEDED;
           }
       }
    }
    .s-bottom{
        .padding(10,10,10,10);
        ul{
            .w(170);
            li{
                .w(170);
                img{
                    width: 100%;
                }
            }
        }
    }
}
</style>


