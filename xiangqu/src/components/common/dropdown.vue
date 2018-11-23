<template>
    <div class="dd">
        <div>
            <p @click="menu">全部分类<i :class="[isShow,(isShow?'fa fa-chevron-up':'fa fa-chevron-down')]"></i></p>
            <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
                <ul v-show="isShow">
                    <li v-for="(item,index) in list" :key='index'>{{item}}</li>
                </ul>
            </transition>
            
        </div>
    </div>
</template>
<script>
export default {
    name:'dropdown',
    components:{},
    data(){
        return {
            isShow:false,
            // name:'我是下拉菜单！',
            list:['全部','UI/UX','平面','插画/漫画','家居/家装','女装/搭配','男士/风尚','婚礼','工业设计','摄影','造型/美妆','美食','旅行','手工/布艺','健身/舞蹈','儿童','宠物','美图','明星','美女','礼物','极客','动漫','建筑设计','人文艺术','数据图','游戏','汽车/摩托','电影/图书','生活百科','教育','运动','搞笑','视频']
        }
    },
    methods:{
        menu(){
            this.isShow=!this.isShow
        }
    }

}
</script>

<style lang="less" scoped>
@import url('../../styles/main.less');
.dd{
    background: #fff;
    width: 100%;
    .padding(46,0,0,0);
    div{
        p{
            background: #fafafa;
            text-align: center;
            .fs(18);
            .h(44);
            .lh(44);
            border-bottom: 1px solid #ededed;
            position: relative;
            z-index: 9;
            i{
               float: right;
               .lh(44);
               .margin(0,10,0,0);
            }
        }
        ul{
            width: 100%;
            
            li{
                list-style: none;
                display:inline-block;
                .w(186.5);
                background: #fff;
                .padding(10,0,10,0);
                .fs(16);
                border-left: 1px solid #ededed;
                border-bottom: 1px solid #ededed;
                text-align: center;
            }
        }
    }
}


</style>


