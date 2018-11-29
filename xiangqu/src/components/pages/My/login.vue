<template>
    <div class="login">
        <div class="top">
            <p>使用合作帐号登录花瓣</p>
            <p class="icon"><img src="../../../../static/imgs/weib-icom.jpg" alt=""></p>
            <p>或者，使用注册邮箱/手机号登录</p>
        </div>
        <div class="bottom">
            <input type="text" placeholder="账号" v-model="username">
            <input type="password" placeholder="密码" v-model="password">
            <input type="button" value="登录" @click="Login">
        </div>
        <div class="reg">还没有花瓣账号？<a @click="toreg">立即注册</a></div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return {
            name:"login",
            username:'',
            password:''
        }
    },
    methods:{
        toreg(){
            this.$router.push('/Reg')
            location.reload();
        },
        Login(){
            var storage=window.localStorage;
            var psw=storage.getItem(this.username);
            if(psw){
                if(psw==this.password){
                    window.localStorage.setItem('login',this.username);
                    // this.toreg();
                    this.$router.push('/Find')
                    location.reload();
                }else{
                    alert('密码错误！！');
                    this.password='';
                }
            }else{
                var r=confirm('该用户不存在，是否前往注册?');
                if(r){
                    this.$router.push('/Reg');
                    location.reload();
                }else{
                    this.username='';
                    this.password='';
                }
            }
            console.log(psw);
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
.login{
    .padding(70,20,20,20);
    .fs(16);
    color: #777;
    .top{
        text-align: center;
        .icon{
            text-align: center;
            .padding(20,0,20,0);
            img{
                .w(270);
            }
        }
    }
    .bottom{
        .padding(20,0,0,0);
        input{
            .margin(7,0,7,0);
            border: 1px solid #ccc;
            .w(335);
            .h(40);
            .fs(16);
        }
        input[type="button"]{
            background: linear-gradient( #E53E49, #D43636);
            border: 1px solid #C90000;
            color: #fff;
        }
    }
    .reg{
        text-align: center;
        .margin(30,0,0,0);
        a{
            .padding(0,0,0,5);
        }
    }
}
</style>


