<template>
<div class="a1">
    <div id="app">
        <div class="contain">
            <div class="imgs"><img :src="'https://images.weserv.nl/?url='+this.item.photo.path"></div>
            <div class="caozuo">
                <div class="gongneng">
                    <li><i class="fa fa-star"></i>{{this.item.favorite_count}}<span>收藏</span></li>
                    <li><i class="fa fa-heart"></i>{{this.item.favorite_count}}<span>更多</span></li>
                    <li class="li3"><i class="fa fa-ellipsis-h"></i>更多</li>
                </div>
            </div>
            <div class="num">{{this.item.msg}}</div>
            <div class="info">
                <img :src="'https://images.weserv.nl/?url='+this.item.photo.path">
                <ul>
                    <li>{{this.item.msg}}</li>
                    <li>于<span>{{this.item.add_datetime}}</span>之前采集</li>
                </ul>
            </div>
        </div>
        <div class="advert">
            <h2>广告位置<i class="fa fa-chevron-right"></i></h2>
            <ul><li><img src="../../../static/imgs/m2.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m1.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m3.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m4.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m5.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m6.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m7.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m2.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m1.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m3.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m4.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m5.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m6.jpg" alt=""></li>
                <li><img src="../../../static/imgs/m7.jpg" alt=""></li>
            </ul>
        </div>
        <div class="entry">
            <h3>为你推荐的采集</h3>
        </div>
        
    </div>
    <allList :new-data="false" :father-data="listurl"></allList>
</div>
</template>

<script>
import Vue from 'vue';
import {InfiniteScroll} from 'mint-ui';
import allList from '../common/allList';

export default {
    name:'Details',
    components:{allList},
    // props:['id','films'],
    data(){
        return {
            item:{},
            start:1,
            limit:10,
            listurl:'5017d172705cbe10c0000004'
        }
    },
    //  computed:{
    //     store(){
    //         // return this.$store.state.login;
    //     }
    // },
    methods:{
        loadMore() {
            this.getData();
        
        },
        // getData(){
        //     this.item=this.$router.history.current.params.ite;
        //     console.log(this.item)
        //     console.log(this.item.photo.path)
        // },
        getData(){
            console.log('这里是兴趣')
            var storage=window.localStorage;
            var ite=this.$router.history.current.params.ite;
            if(ite){
                this.item=ite;
                var data=JSON.stringify(ite);
                storage.setItem('detop',data);
                
            }else{
                var top2=storage.getItem('detop');
                this.item=JSON.parse(top2);
            }
        }
    },
    created(){
        this.getData();
        console.log(767)
        // console.log(this.$router.history.current.params.ite)
    }
}

</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
// .a1{.h(1100);}
#app{
    position: relative;
    .top(47);
    .left(0);
    .h(738);
    .contain{
        border-bottom: 1px solid #ddd;
        .imgs{
            width:100%;
            .h(375);
            img{
                width: 100%;
                height: 100%;
            }
        }
        .caozuo{
            .padding(5,0,10,0);
            .gongneng{
                li{
                    display: inline-block;
                    border: 1px solid #ccc;
                    position: relative;
                    .bdradius(2);
                    background: #fafafa;
                    .fs(12);
                    text-align: center;
                    .lh(30);
                    .h(30);
                    .w(90);
                    .margin(0,0,0,8);
                    i{
                        .margin(0,8,0,0)
                    }
                    span{
                        .padding(0,0,0,4)
                    }
                }
                .li3{
                    // position: absolute;
                    // .right(10);
                    .margin(0,0,0,60);
                    .w(70);

                }
            }
        }
        .num{
            background: #f6f6f6;
            .fs(16);
            .padding(10,0,10,12);
        }
         .info{
            .fs(16);
            .padding(10,0,10,12);
            position: relative;
            top: 0;
            left: 0;
            color: #777;
            .fs(14);
            img{
                .w(30);
                .h(30);
                display: inline-block;
                position: absolute;
                .left(8);
                .top(15);
            }
            ul{
                .padding-left(45);
                display: inline-block;
                li{
                    .fs(14);
                    color: #333;
                    span{
                        .fs(14);
                    }
                }
                :nth-child(1){
                    .fs(16);

                }
            }
                
        }
    }
    .advert{
        border-bottom: 1px solid #ccc;
        h2{
            .fs(16);
            .padding(10,0,5,10);
            position: relative;
            i{
                position: absolute;
                .right(10);
                .lh(20);
            }
        }
        ul{
            .padding(5,0,15,0);
            overflow-x: auto;
            white-space: nowrap;
            li{
                display: inline-block;
                img{
                    .h(50);
                    .w(50);
                    display: inline-block;
                }

            }
        }
    }
    .entry{
        background: @bg-color;
        h3{
            .fs(16);
            .padding(5,5,5,0);
        }
        .list{
                    .w(187);
        background: @bg-color;
        float: left;
        ul{
            background: #fff;
            .w(165);
            .margin(8,0,0,10);
            display: inline-block;
            vertical-align: top;
            img{
                .w(165);
            }
            li{
                .padding(6,8,6,8);
                .fs(16);
                position: relative;
                top: 0;
                left: 0;
                color: #777;
                .fs(14);
                img{
                    .w(30);
                    .h(30);
                    .bdradius(30);
                    display: inline-block;
                    position: absolute;
                    .left(8);
                    .top(8);
                }
                p{
                    .padding-left(45);
                    display: inline-block;
                    span{
                        .fs(14);
                    }
                }
                
            }
            .li1{
                .h(20);
                border-bottom: 1px solid #ccc;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
}
    }
    
}

</style>

