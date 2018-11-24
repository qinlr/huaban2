<template>
    <div class="info">
        <div class="contain">
            <div class="banner">
                <img src="../../../static/imgs/3.jpg" alt="">
                <div class="txt">
                    
                    <h2>三明治</h2>
                    <p>你中有我我中有你，这不就是三明治吗？</p>
                    <button>关注</button>
                    <div>
                        <span class="span1"></span>
                        <span class="span">
                            <i class="fa fa-users"></i>
                            Ta们已关注</span>
                        <span class="span1"></span>
                    </div>
                </div>
                
            </div>
            <div class="content">
                <ul class="img">
                    <li><img src="../../../static/imgs/m1.jpg"></li>
                    <li><img src="../../../static/imgs/m2.jpg"></li>
                    <li><img src="../../../static/imgs/m1.jpg"></li>
                    <li><img src="../../../static/imgs/m4.jpg"></li>
                    <li><img src="../../../static/imgs/m5.jpg"></li>
                </ul>
            </div>
            <div class="morefind">
                <h3>更多发现</h3>
                <ul>
                    <li><span>多肉植物</span></li>
                    <li><span>樱桃</span></li>
                </ul>
            </div>
        </div>
        <!-- <allList :new-data="true" :father-data="url"></allList> -->
    </div>
</template>
<script>
import allList from './allList';
export default {
    name:'Info',
    components:{allList},
    data(){
        return {
            name:'我是info',
             url:'d172705cbe10c0000006',
             top:{}
        }
    },
      methods:{
        getinfo(){
            console.log('这里是兴趣')
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
            // var caiji=this.top.favorite_count;
            // var guanz=this.top.album.favorite_count;
            console.log(this.top);
            // this.list=[caiji+'采集','被'+guanz+'人关注'];
            // console.log(this.list)
        }
    },
    created(){
        this.getinfo();
    }    
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';

.info{
    .h(400);
    position: relative;
    .top(46);
    .contain{
        .banner{
            .padding-bottom(40);
            // background: green;
            .h(155);
            overflow: hidden;
            img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                .h(195);
            }
            .txt{
                text-align: center;
                color: #fff;
                position: absolute;
                z-index: 1;
                top:0;
                left: 50%;
                transform: translateX(-50%);
                h2{
                    color: #fff;
                    .fs(18);
                    .padding(15,0,0,0);
                }
                p{
                    .fs(14);
                    .margin(10,0,0,0);
                }
                button{
                    .h(27);
                    .w(60);
                    border: 1px solid #aaa;
                    text-align: center;
                    color: #fff;
                    background: #E53E49;
                    .fs(14);
                    font-weight: bold;
                    .margin(10,0,0,0);
                }
                div{
                    .lh(20);
                    .span1{
                        display: inline-block;
                        .w(30);
                        .margin(0,0,4,0); 
                        border-bottom: 1px solid #fff;
                    }
                    .span{
                        .fs(14);
                        border:none;
                        i{
                            color: #fff;
                        }
                    }
                }
                

            }
            
        }
        .content{
            .h(33);
            border-bottom: 2px solid #ccc;
            // background: red;
            .img{
                text-align: center;
                position: relative;
                .top(-22);
                left: 0;
                li{
                    display: inline-block;
                    .h(44);
                    .w(44);
                    .bdradius(44);
                    overflow: hidden;
                    position: relative;
                    // background: red;
                    img{
                        .h(44);
                        .w(44);
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                    }
                }
            }
        }
        .morefind{
            .h(120);
            // background: gold;
            h3{
                .fs(16);
                text-align: center;
            }
            ul{
                .margin(10,0,0,0);
                li{
                    .h(80);
                    .w(130);
                    .margin(0,0,0,15);
                    .bdradius(5);
                    background: skyblue;
                    float: left;
                    text-align: center;
                    span{
                        .fs(18);
                        color: #eee;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}

</style>

