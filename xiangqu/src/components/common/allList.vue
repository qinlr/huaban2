<template>
    <div id="all"
             v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
        <!-- {{fatherData}} -->
        <div class="new-list" >
                <ul  v-for="(item,index) in films" :key="index"  v-if="index%2==0">
                    <img :src="'https://images.weserv.nl/?url='+item.photo.path">
                     <li class="li1">{{item.msg}}
                         <p v-if="newData">
                             <span><i class="fa fa-star"></i>{{item.favorite_count}}</span>
                             <span><i class="fa fa-heart"></i>{{item.favorite_count}}</span>
                             <!-- {{newData}} -->
                        </p>
                    </li>
                    <li class="li2"><img :src="'https://images.weserv.nl/?url='+item.photo.path">
                        <p><span>{{item.id}}</span><br><span>{{item.msg}}</span></p>
                    </li>
                </ul>
        </div>
         <div class="new-list" >
                <ul  v-for="(item,index) in films" :key="index"  v-if="index%2==1">
                    <img :src="'https://images.weserv.nl/?url='+item.photo.path">
                     <li class="li1">{{item.msg}}
                         <p v-if="newData">
                             <span><i class="fa fa-star"></i>{{item.favorite_count}}</span>
                             <span><i class="fa fa-heart"></i>{{item.favorite_count}}</span>
                        </p>
                    </li>
                    <li class="li2"><img :src="'https://images.weserv.nl/?url='+item.photo.path">
                        <p><span>{{item.id}}</span><br><span>{{item.msg}}</span></p>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import dropdown from '../common/dropdown';//引入下拉菜单组件
import {InfiniteScroll} from 'mint-ui';

Vue.use(InfiniteScroll);

export default {
    name:'Hot',
    components:{dropdown},
    // props:['url'],
    data(){
        return {
            films:[],
            limit:10
        }
    },
    props:['newData','fatherData','shuaxin'],
    methods:{
        loadMore(){
             this.loading = true;
            setTimeout(() => {
                this.getData();
                this.loading = false;
            }, 2500);
            // console.log(this.fatherData);
            
        },
        getData(){
            //http://huaban.com/all/?max=2124278561&limit=20&wfl=1
//https://www.duitang.com/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=5017d172705cbe10c0000007&path=&_=1542288113268
//https://www.duitang.com/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=5017d172705cbe10c0000006&path=&_=1542974371864
//https://www.duitang.com/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=5017d172705cbe10c0000004&path=&_=1542974686858 d172705cbe10c0000006
            // this.$axios.get('/api1/napi/blog/list/by_category/',{params:{start:0,include_fields:'sender%2Calbum%2Clike_count%2Cmsg',limit:this.limit,cate_key:this.fatherData,path:'',_:1542288113268}})
            this.$axios.get('api1/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key='+this.fatherData+'&path=&_=1542974371864')
            .then((res)=>{
                this.films=this.films.concat(res.data.object_list);
                this.limit+=(this.limit)*1
            })
            .catch((err)=>{
                console.log(err)
            })
            // this.films=['../../../static/imgs/m1.jpg','../../../static/imgs/m2.jpg','../../../static/imgs/m3.jpg','../../../static/imgs/m4.jpg','../../../static/imgs/m5.jpg','../../../static/imgs/m6.jpg','../../../static/imgs/m7.jpg','../../../static/imgs/m1.jpg','../../../static/imgs/m2.jpg','../../../static/imgs/m3.jpg','../../../static/imgs/m4.jpg','../../../static/imgs/m5.jpg','../../../static/imgs/m6.jpg','../../../static/imgs/m7.jpg']
        }
    },
    created(){
        this.getData();
        
    },
    updated(){
         this.getData();
    }

    
}
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
@import url('../../styles/common/reset.less');

</style>
