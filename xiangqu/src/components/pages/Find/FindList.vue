<template>
    <div class="findlist">
        <div class="findtop">
            <div class="title">大家正在关注</div>
            <ul class="clearfix">
                <!-- style="background-image:url('item.bgimg')" -->
                <li v-for="(item,index) of followlist" :key="index">{{item.name}}</li>
            </ul>
        </div>
        <div class="findbottom">
            <div class="title">为您推荐</div>
            <ul class="clearfix">
                  <li v-for="(item,index) in list" :key="index" :class="((index+1)%4==1||(index+1)%4==0)?'bigimg':'smallimg'" @click="showtype(index,item2)">
                    <img :src="'https://images.weserv.nl/?url='+item.photo.path" alt="">
                    <div class="img-bottom">
                        <div class="info">
                            <p class="info-title">{{item.album.name}}</p>
                            <p class="info-bottom">{{item.album.like_count}}采集 {{item.album.favorite_count}}粉丝</p>
                        </div>
                        <p class="type" v-for="(item2,idx) in typelist" :key="idx" v-if="index%2==idx">{{item2}}</p>
                    </div>
                </li> 
            </ul>
            <div class="more" @click="getmore">加载更多</div>
        </div>
     </div>
</template>
<script>
import Vue from 'vue';
import { Toast,InfiniteScroll,Indicator  } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {
    name:'FindList',
    data(){
        return {
            followlist:[{name:'竹编',bgimg:'http://hbimg.b0.upaiyun.com/0016532c2d84c7d52b4264bba7ee0370aecce4b9829c3-1JashA_sq236bl4'},
            {name:'美食手机壁纸',bgimg:'http://hbimg.b0.upaiyun.com/fecb71251b19d000b11c36a971a95771cbfb44cd1bdae-gKwoAm_sq236bl4'},
            {name:'夜景',bgimg:'http://hbimg.b0.upaiyun.com/06e8f29eadb8edd8904ebb0e5e5a2e66618b18f618a08-QuVGbB_sq236bl4'},
            {name:'CG人设',bgimg:'http://hbimg.b0.upaiyun.com/e17678138c9c92c48339fd7be2ea03008c1e9bc93aa1c-iusGwO_sq236bl4'},
            {name:'包装设计',bgimg:'http://hbimg.b0.upaiyun.com/61ba7888d49cb049c3709a4b90eea02808bb7bfd13412-HrhqoM_sq236bl4'},
            {name:'手机菜单界面',bgimg:'http://hbimg.b0.upaiyun.com/459508e4fbbbfdf489b5879c95c07537d72913132a1c9-bLFkVN_sq236bl4'}],
            list:[],
            typelist:['画板','兴趣'],
            page:2,
            limit:12
        }
    },
    methods:{
        showtype(index){
            console.log('index:'+index);
            var type=document.querySelectorAll('.type')[index].innerHTML;
            console.log('type:'+type);
            this.$router.push('/Drawing')
        },
        getlist(){
            //http://www.shijue.me/community/search?type=json&page=1&size=20&license=-1&orderby=recommendTime
            // this.$axios.get('/api2/',{params:{limit:12,page:this.page}})
            this.$axios.get('api1/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit='+this.limit+'&cate_key=540ebb4b586df58a30d1174a&path=&_=1542973574739')
            .then((res)=>{
                // console.log(111);
                this.list=this.list.concat(res.data.object_list);
                this.limit+=12;
                console.log(this.list)
            })
            .catch((err)=>{
                // console.log(222);
                console.log(err);
            })
        },
        getmore(){
            this. getlist()
        }
    },
    created(){
        this.getlist();
    }
}
</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
.findlist{
    .title{
            width: 100%;
            text-align: center;
            .h(30);
            .lh(30);
            .fs(14);
            color: @fl-ft-color;
            .margin(0,0,10,0);
        }
    .findtop{
        .padding(0,0,10,0);
        ul{
            li{
                float: left;
                .w(116);
                color: #fff;
                background-image:url('http://hbimg.b0.upaiyun.com/0016532c2d84c7d52b4264bba7ee0370aecce4b9829c3-1JashA_sq236bl4'); 
                .h(60);
                text-align: center;
                .lh(60);
                .margin(1,1,1,1);
                .fs(14);
            }
        }
    }
    .findbottom{  
        ul{
            li{
                .margin(3,2,3,2);
                float: left;
            }
        }
        
        .more{
             width: 100%;
            text-align: center;
            .h(44);
            .lh(44);
            .fs(18);
            color: @fl-ft-color;
        }
        .bigimg{
            .w(235);
            .h(235);
            position: relative;
            color: #fff;
            // border: 1px solid red;
            img{
                width: 100%;
                height: 100%;
            }
            
            .img-bottom{
                .fs(18);
                .padding(0,0,10,0);
                position: absolute;
                bottom: 0;
                left: 0;
                .type{
                    float: left;
                    .padding(0,10,0,10);
                    .w(27);
                    transform: rotate(-180deg);
                    border-left: 1px solid #fff;
                }
                .info{
                    float: right;
                    .padding(0,0,0,10);
                    .info-title{
                        .w(175);
                        font-weight: 500;
                        overflow: hidden;text-overflow: ellipsis;white-space: nowrap
                    }
                    .info-bottom{
                        .fs(14);
                    }
                }
            }
        }
        .smallimg{
            .w(116);
            .h(235);
            background: @fl-bg-color;
            img{
                width: 100%;
                .h(116);
            }
            .img-bottom{
                background: @fl-bg-color;
                .padding(8,8,8,8);
                // .h(132);
                color:@fl-ft-color;
                .fs(16);
                .h(60);
                .info{
                     .info-title{
                    color: @h-ft-color;
                    
                    }
                    .info-bottom{
                        color: #999;
                        .fs(12);
                    }
                }
                p{
                    .padding(0,0,3,0);
                }
               
                .type{
                    .fs(18);
                    color: #d0d0d0;
                }
            }
        }
    }    
    .padding(10,8,10,8);
}
</style>


