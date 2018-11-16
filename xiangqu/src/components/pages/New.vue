<template>
               
    <div id="all">
        <dropdown></dropdown>
        <div class="new-list" v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                <ul  v-for="(item,index) in films" :key="index" v-if="index%2==0" >
                    <img :src="'https://images.weserv.nl/?url='+item.photo.path">
                     <li class="li1">{{item.msg}}</li>
                    <li><img :src="'https://images.weserv.nl/?url='+item.photo.path">
                        <p><span>{{item.id}}</span><br><span>{{item.sender_id}}</span></p>
                    </li>
                </ul>
                
        </div>
        <div class="new-list" v-infinite-scroll="loadMore"
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
        <back-top size=''></back-top>
    </div>
</template>

<script>
import Vue from 'vue';
import dropdown from '../common/dropdown';//引入下拉菜单组件
import {InfiniteScroll} from 'mint-ui';

Vue.use(InfiniteScroll);

export default {
    name:'New',
    components:{dropdown},
    props:['url'],
    data(){
        return {
            films:[],
            start:0,
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
            //http://huaban.com/all/?max=2124278561&limit=20&wfl=1
//https://www.duitang.com/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=5017d172705cbe10c0000007&path=&_=1542288113268
//https://api.zcool.com.cn/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=3

            
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
        // console.log(this.$store.state.login)
    },
    mounted(){
        console.log(111)
        // console.log(this.$router)
        // console.log()
    }
    
}
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
#all{
    background: @bg-color;
    .new-list{
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

</style>


