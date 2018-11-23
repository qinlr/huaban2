<template>
    <div id="all">
        <dropdown></dropdown>
        <allList :new-data="true"></allList>
        <!-- <div class="new-list" >
                <ul  v-for="(item,index) in films" :key="index"  v-if="index%2==0">
                    <img :src="'https://images.weserv.nl/?url='+item.photo.path">
                     <li class="li1">{{item.msg}}
                         <p>
                             <span><i class="fa fa-star"></i>{{item.favorite_count}}</span>
                             <span><i class="fa fa-heart"></i>{{item.favorite_count}}</span>
                        </p>
                    </li>
                    <li class="li2"><img :src="'https://images.weserv.nl/?url='+item.photo.path">
                        <p><span>{{item.id}}</span><br><span>{{item.sender_id}}</span></p>
                    </li>
                </ul>
        </div>
         <div class="new-list" >
                <ul  v-for="(item,index) in films" :key="index"  v-if="index%2==1">
                    <img :src="'https://images.weserv.nl/?url='+item.photo.path">
                     <li class="li1">{{item.msg}}
                         <p>
                             <span><i class="fa fa-star"></i>{{item.favorite_count}}</span>
                             <span><i class="fa fa-heart"></i>{{item.favorite_count}}</span>
                        </p>
                    </li>
                    <li class="li2"><img :src="'https://images.weserv.nl/?url='+item.photo.path">
                        <p><span>{{item.id}}</span><br><span>{{item.sender_id}}</span></p>
                    </li>
                </ul>
        </div> -->
    </div>
</template>

<script>
import Vue from 'vue';
import dropdown from '../common/dropdown';//引入下拉菜单组件
import {InfiniteScroll} from 'mint-ui';
import allList from '../common/allList';

Vue.use(InfiniteScroll);

export default {
    name:'Hot',
    components:{dropdown,allList},
    props:['id','films'],
    data(){
        return {
            films:[]
        }
    },
    methods:{
        
        getData(){
            //http://huaban.com/all/?max=2124278561&limit=20&wfl=1
//https://www.duitang.com/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=5017d172705cbe10c0000007&path=&_=1542288113268
            this.$axios.get('/api1/napi/blog/list/by_category/',{params:{start:0,include_fields:'sender%2Calbum%2Clike_count%2Cmsg',limit:10,cate_key:'5017d172705cbe10c0000007',path:'',_:1542288113268}})
            // this.$axios.get('api/all/',{params:{max:2124278561,limit:20,wfl:1}})
            .then((res)=>{
                this.films=res.data.object_list
                console.log(start)
                console.log(res.data)
            })
            .catch((err)=>{
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
// #all{
//     background: @bg-color;
//     .new-list{
//         .w(187);
//         background: @bg-color;
//         float: left;
//         ul{
//             background: #fff;
//             .w(165);
//             .margin(8,0,0,15);
//             display: inline-block;
//             vertical-align: top;
//             img{
//                 .w(165);
//             }
//             .li2{
//                 .padding(6,8,6,8);
//                 position: relative;
//                 top: 0;
//                 left: 0;
//                 color: #777;
//                 .fs(14);
//                 img{
//                     .w(30);
//                     .h(30);
//                     .bdradius(30);
//                     display: inline-block;
//                     position: absolute;
//                     .left(8);
//                     .top(8);
//                 }
//                 p{
//                     .padding-left(45);
//                     display: inline-block;
//                     span{
//                         .fs(14);
//                     }
//                 }
                
//             }
//             .li1{
//                 .padding(5,0,5,5);
//                 .fs(14);
//                 color: #777;
//                 border-bottom: 1px solid #ccc;
//                 overflow: hidden;
//                 text-overflow: ellipsis;
//                 white-space: nowrap;
//                 p{
//                     .h(20);
//                     span{
//                         .fs(12);
//                         display: inline-block;
//                         .padding(0,0,0,5);
//                         i{
//                             .margin(0,4,0,0);
//                             .fs(12);
//                         }
                        
//                     }
//                 }
//             }
//         }
// }
// }

</style>
