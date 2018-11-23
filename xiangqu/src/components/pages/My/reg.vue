<template>
    <div class="reg">
        <div class="top">
            <p>使用合作帐号注册花瓣</p>
            <p class="icon"><img src="../../../../static/imgs/weib-icom.jpg" alt=""></p>
            <p>或者，使用邮箱/手机号注册</p>
        </div>
        <div class="bottom">
            <input type="text" v-model="username" placeholder="请输入邮箱/手机号">
            <input type="password" v-model="password" placeholder="密码">
            <input type="button" value="注册" @click="Reg">
        </div>
        <div class="reg">还没有花瓣账号？<a>立即登录</a></div>
    </div>
</template>
<script>
export default {
    name:'Reg',
    data(){
        return {
            name:"login",
            username:'',
            password:''
        }
    },
    methods:{
        Reg(){
            var storage=window.localStorage;
            storage.setItem(this.username,this.password);
            alert('注册成功，请前往登录');
            this.$router.push('/Login');
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
.reg{
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


