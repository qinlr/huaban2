<template>
    <!-- <div> -->
        <div class="taste">
        <div class="header">
            <div class="hleft">
                <ul>
                    <li><img :src="'https://images.weserv.nl/?url='+this.top.photo.path"></li>
                    <li><p>{{this.top.msg}}</p></li>
                    <li><span>来自 {{this.top.album.name}}</span></li>
                </ul>
            </div>
            <div class="hright">
                <button>关注</button>
                <button class="btn"><i class="fa fa-ellipsis-h"></i></button>
            </div>
        </div>
        <div class="nav">
            <ul >
                <li v-for="(item,index) in list" :key="index" @click="changesel(index)" :class="sel===index?'sel':''">{{item}}</li>
            </ul>
        </div>
    </div>
    <!-- <allList :new-data="true" :father-data="url"></allList>
    </div> -->
</template>
<script>
// import Vue from 'vue'
import allList from './allList';
// import allList from './allList'

export default {
    name:'TasteNav',
    components:{allList},
    data(){
        return{
            // name:'TasteNav',
            list:[],
            sel:0,
            url:'5017d172705cbe10c0000006',
            top:{}
        }
    },
    props:['test'],
    methods:{
        changesel(index){
            this.sel=index;
            if(index){
                this.url='5017d172705cbe10c0000006';
            }else{
                this.url='501f666a194f991ccfd28a24'
            }
            this.test(this.url);
            
        },
        getinfo(){
            console.log('这里是画板')
            var storage=window.localStorage;
            var ite=this.$router.history.current.params.ite;
            if(ite){
                this.top=ite;
                var data=JSON.stringify(ite);
                storage.setItem('top1',data);
                
            }else{
                var top2=storage.getItem('top1');
                this.top=JSON.parse(top2);
            }
            var caiji=this.top.favorite_count;
            var guanz=this.top.album.favorite_count;
            console.log(this.top);
            this.list=[caiji+'采集','被'+guanz+'人关注'];
            console.log(this.list)
        }
    },
    created(){
        // console.log('这里是画板头部')
        this.getinfo();
    }
}
</script>
<style lang="less" scoped>
@import '../../styles/main.less';
.taste{
    position: relative;
    .top(46);
    .h(160);
    .header{
        .h(70);
        width:100%;
        border-bottom: 1px solid #ccc;
        // background: red;
        .hleft{
            position: absolute;
            .left(5);
            .top(8);
            ul{
                li{
                    img{
                        .h(40);
                        .w(40);
                    }
                    p{
                        position: absolute;
                        .left(50);
                        .top(5);
                        .fs(16);
                        .w(170);
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    span{
                        display: block;
                        .fs(14);
                        position: absolute;
                        .bottom(0);
                        .left(50);
                        .w(170);
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                }
            }
        }
        .hright{
            position: absolute;
            .right(10);
            button{
                .h(30);
                .w(60);
                text-align: center;
                .fs(16);
                background: #fafafa;
                border: 1px solid #ccc;
                font-family: '黑体';
            }
            .btn{
                .w(50);
                i{
                    .padding(3,0,0,0); 
                }
            }
        }
    }
    .nav{
        position: absolute;
        top:70;
        left: 0;
        ul{
            display: flex;
            justify-content: space-between;
            .w(375);
            li{
                width: 50%;
                .fs(16);
                border-bottom:1px solid #ccc; 
                .padding(7,0,7,0);
                text-align: center;
                color: #777;
                // display: inline-block;
            }
            .sel{
                background: #ededed;
                color: #222;
            }
        }
    }
}
</style>


