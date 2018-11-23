<template>
    <div class="taste">
        <div class="header">
            <div class="hleft">
                <ul>
                    <li><img src="../../../static/imgs/m1.jpg"></li>
                    <li><p>想去哪里</p></li>
                    <li><span>来自 lisa</span></li>
                </ul>
            </div>
            <div class="hright">
                <button>关注</button>
                <button class="btn"><i class="fa fa-ellipsis-h"></i></button>
            </div>
        </div>
        <div class="nav">
            <ul >
                <li v-for="(item,index) in list" :key="index" :class="sel===item?'sel':''">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
// import Vue from 'vue'

export default {
    name:'TasteNav',
    data(){
        return{
            name:'TasteNav',
            list:['491采集','被467人关注'],
            sel:'491采集'
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../styles/main.less';
.taste{
    position: relative;
    .top(46);
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
                        overflow: hidden;
                    }
                    span{
                        display: block;
                        .fs(14);
                        position: absolute;
                        .bottom(0);
                        .left(50);
                        .w(170);
                        overflow: hidden;
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


