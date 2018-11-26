<template>
   <div id="Header">
        <div class="header">
        <div class="left fl" v-show="!Show">
            <a href=""><img src="../../../static/imgs/huaban_logo.png" alt=""></a>
            <div class="left-title fr">{{hdtitle}}</div>
        </div>
        <form class="fl">
            <a class="close"  v-show="Show" @click="Show=false"><i class="fa fa-times"></i></a>
            <input type="text" v-model="search"  v-show="Show" @keyup.enter="clSearch">
            <a class="search"  v-show="true" @click="clSearch"><i class="fa fa-search"></i></a>

        </form>
        <div class="right fr" @click="change" :style="{background:rbg}">
            <i :class="icon"></i>
        </div>
    </div>
    <div class="nav">
        <transition 
            enter-active-class='animated fadeInDownBig'
            leave-active-class='animated fadeOutUpBig'
        >
            <TopNav v-show="navShow"></TopNav>
        </transition>
    </div>
    
    
   </div>
</template>
<script>
import TopNav from './TopNav';
import Info from './Info';
import TasteNav from './TasteNav';
import Vue from 'vue';
export default {
    name:'Header',
    data(){
        return {
            name:'这里是header',
            search:'',
            Show:false,
            icon:'fa fa-bars',
            rbg:"#fff"
        }
    },
    computed:{
        hdtitle(){return this.$store.state.headertitle},
        navShow(){return this.$store.state.navShow}
    },
    components:{TopNav,Info,TasteNav},
    methods:{
        clSearch(){
            if(this.Show&&this.search){
                this.$store.commit('changeSearch',this.search)
                console.log('跳转了')
                this.$router.push({path:'/Search',params:{val:this.search}});
            }
            this.Show=!this.Show;
            
            
        },
        
        changenav(){
            this.navshow=this.$store.state.navShow;
            if(this.navshow){
                this.icon='fa fa-times';
                this.rbg='#f5f5f5';
            }else{
                this.icon='fa fa-bars';
                this.rbg="#fff";
            }
        },
        change(){
            this.$store.commit('changenavShow',!this.navshow);
            this.changenav();
        },
        gettitle(){
            var path=this.$route.path;
            switch (path) {
                case '/Find':
                    this.$store.commit('changehdtitle','发现')
                    break;
                    case ('/New'||'/new'):
                    this.$store.commit('changehdtitle','最新')
                    break;
                    case ('/Hot'||'/hot'):
                    this.$store.commit('changehdtitle','热门')
                    break;
                    case '/Reg':
                    this.$store.commit('changehdtitle','注册')
                    break;
                    case '/Login':
                    this.$store.commit('changehdtitle','登录')
                    break;
                    case '/Search':
                    var search=this.$store.state.search;
                    this.$store.commit('changehdtitle',search)
                    break;
                    case '/Drawing':
                    this.$store.commit('changehdtitle','画板')
                    break;
                    case '/Interest':
                    this.$store.commit('changehdtitle','兴趣')
                    break;
                    // case '/Interest':
                    // this.$store.commit('changehdtitle','兴趣')
                    // break;
            }
        //   if(this.$route.path=='/Find'){
        //       this.$store.commit('changehdtitle','发现')
        //   }
        //   if(this.$route.path=='/New'){
        //       this.$store.commit('changehdtitle','最新')
        //   }
        //   if(this.$route.path=='/Hot'){
        //       this.$store.commit('changehdtitle','热门')
        //   }
          console.log(this.$route.path);
      }
    },
    created(){
        this.gettitle();
    },
    updated(){
        this.gettitle();
        this.changenav();
        // this.clSearch();
    }
}
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
#Header{
    position: fixed;
    z-index: 10;
}

.header{
    position: fixed;
    top: 0;
    z-index: 30;
    background: #fff;
    .w(375);
    .h(46);
    border-bottom: 1px solid #ccc;
    color: @h-ft-color;
    .left{
        height: 100%;
        .lh(46);
        .fs(18);
        a{
            display: inline-block;
            .padding(0,0,0,10);
            .w(27);
            height: 100%;
            // .lh(46);
            overflow: hidden;
            img{
                .h(25);
            }
        }
        .left-title{
            .padding(0,0,0,10);
        }
    }
    //from
    form{
        .padding(0,0,0,10);
        display: flex;
        align-items: center;
        .h(46);
        a{
            .fs(22);
             .h(44);
            .lh(44);
            text-align: center;
        }
        .close{
            display: inline-block;
            .w(40);
        }
        .search{
            position: absolute;
            .right(45);
            .w(44);
        }
        input{
            .h(28);
            .w(277);
            border: 1px solid #ddd;
            background: #F3F3F3;
        }
    }
    //right
    .right{
        .w(44);
        .h(44);
        .lh(44);
        text-align: center;
        .fs(22);
    }
}
</style>


