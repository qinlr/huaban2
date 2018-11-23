<template>
    <div id="all"
             v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
        <!-- <dropdown></dropdown> -->
        <div class="new-list" >
                <ul  v-for="(item,index) in slist" :key="index"  v-if="index%2==0">
                    <img :src="'https://images.weserv.nl/?url='+item.album.covers[0]">
                     <li class="li1">
                         <p v-if="newData">
                             <span><i class="fa fa-star"></i>{{item.album.favorite_count}}</span>
                             <span><i class="fa fa-heart"></i>{{item.album.like_count}}</span>
                             <!-- {{item.url}} -->
                        </p>
                    </li>
                    <li class="li2"><img :src="'https://images.weserv.nl/?url='+item.album.covers[0]">
                        <p><span>{{item.sender.username}}</span><br><span>{{item.album.name}}</span></p>
                    </li>
                </ul>
        </div>
         <div class="new-list" >
               <ul  v-for="(item,index) in slist" :key="index"  v-if="index%2==1">
                    <img :src="'https://images.weserv.nl/?url='+item.album.covers[0]">
                     <li class="li1">
                         <p v-if="newData">
                             <span><i class="fa fa-star"></i>{{item.album.favorite_count}}</span>
                             <span><i class="fa fa-heart"></i>{{item.album.like_count}}</span>
                             <!-- {{item.url}} -->
                        </p>
                    </li>
                    <li class="li2"><img :src="'https://images.weserv.nl/?url='+item.album.covers[0]">
                        <p><span>{{item.sender.username}}</span><br><span>{{item.album.name}}</span></p>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
// import dropdown from '../common/dropdown';//引入下拉菜单组件
import {InfiniteScroll} from 'mint-ui';
Vue.use(InfiniteScroll);

export default {
    name:'Hot',
    data(){
        return {
            slist:[],
            page:1
        }
    },
    props:['new-data'],
    methods:{
        loadMore(){
            this.getData()
        },
        getData(){
            //http://shijue.me/community/search?search=works&key=%E5%AE%A0%E7%89%A9&type=json&page=1&size=20&license=-1&orderby=rating
            // this.$axios.get('/api3/community/search',
            // {params:{key:this.$store.state.search,type:'json',page:this.page,size:20,license:-1,orderby:'rating'}})
            this.$axios.get('api1/napi/blog/list/by_search/?kw='+this.$store.state.search+'&type=feed&include_fields=top_comments%2Cis_root%2Csource_link%2Citem%2Cbuyable%2Croot_id%2Cstatus%2Clike_count%2Clike_id%2Csender%2Calbum%2Creply_count%2Cfavorite_blog_id&_type=&start=24&_=1542964278389')
            .then((res)=>{
                this.slist=this.slist.concat(res.data.object_list);
                // this.page++;
                console.log(this.slist)
                console.log(this.$store.state.search)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    created(){
        this.getData();
    }

    
}
</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
@import url('../../../styles/common/reset.less');

</style>
