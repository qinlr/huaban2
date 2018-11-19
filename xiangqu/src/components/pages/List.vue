<template>
    <div id="app">
        <div class="contain">
            <!-- {{list}} -->
            <div class="imgs"><img src="../../../static/imgs/m2.jpg"></div>
            <div class="caozuo">
                <div class="gongneng">
                    <li><i class="fa fa-star"></i>1<span>收藏</span></li>
                    <li><i class="fa fa-heart"></i>2<span>更多</span></li>
                    <li class="li3"><i class="fa fa-ellipsis-h"></i>更多</li>
                </div>
            </div>
            <div class="num">ad12sfad3fdsgd45hfhf6789</div>
            <div class="info">
                <img src="../../../static/imgs/m1.jpg">
                <ul>
                    <li>某某资料空间</li>
                    <li>于<span>16分钟</span>之前采集</li>
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
            <div class="list" v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                 <ul  v-for="(item,index) in films" :key="index" v-if="index%2==0">
                    <img :src="'https://images.weserv.nl/?url='+item.photo.path">
                        <li class="li1">{{item.msg}}</li>
                    <li><img :src="'https://images.weserv.nl/?url='+item.photo.path">
                        <p><span>{{item.id}}</span><br><span>{{item.sender_id}}</span></p>
                    </li>
                </ul>
            </div>

            <div class="list" v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                 <ul  v-for="(item,index) in films" :key="index" v-if="index%2==1">
                    <img :src="'https://images.weserv.nl/?url='+item.photo.path">
                        <li class="li1">{{item.msg}}</li>
                    <li><img :src="'https://images.weserv.nl/?url='+item.photo.path">
                        <p><span>{{item.id}}</span><br><span>{{item.sender_id}}</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import {InfiniteScroll} from 'mint-ui';

export default {
    name:'List',
    components:{},
    props:['url'],
    data(){
        return {
            list:[],
            films:[],
            start:1,
            limit:10
        }
    },
     computed:{
        store(){
            // return this.$store.state.login;
        }
    },
    methods:{
        loadMore() {
            this.getData();
        },
        getData(){
        //https://www.duitang.com/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=5017d172705cbe10c0000007&path=&_=1542288113268

            this.$axios.get('/api/napi/blog/list/by_category/',{params:{start:this.start,include_fields:'sender%2Calbum%2Clike_count%2Cmsg',limit:this.limit,cate_key:'5017d172705cbe10c0000007',path:'',_:1542288113268}})
            .then((res)=>{
                this.films=this.films.concat(res.data.object_list);
                this.start+=this.limit;
                // this.toast.close()
                console.log(this.start)
                console.log(res.data)
                // console.log(this.films)
            })
            .catch((err)=>{
                // this.toast.close()
                console.log(err)
            })

        }
    },
    created(){
        this.getData()
    }
}

</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
#app{
    position: relative;
    .top(47);
    .left(0);
    .contain{
        border-bottom: 1px solid #ddd;
        .imgs{
            width:100%;
            img{
                width: 100%;
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
                    .fs(15);
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

