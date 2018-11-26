<template>
    <div class="Drawing">
         <!-- :falist='this.$router.history.current.params.id' -->
        <TasteNav :test="sonurl"></TasteNav>
        <!-- {{url}} -->
        <allList :new-data="true" :father-data="url" :shuaxin="getlist"></allList>
    </div>
</template>
<script>
// import FindList from './FindList'
import TasteNav from '../../common/TasteNav'
import allList from '../../common/allList'
export default {
    name:'Drawing',
    components:{TasteNav,allList},
    data(){
        return {
            // url:''
            url:'501f666a194f991ccfd28a24',
            // getlist:''
            // list:{}        
        }
    },
    computed:{
        list(){
            return this.$router.history.current.params.ite;
        }
    },
    methods:{
        getlist(getList){getList();},
        sonurl(surl){
            this.url=surl;
        },
        getinfo(){
            console.log('这里是画板')
            this.list=this.$router.history.current.params.ite;
            console.log(this.list);
        }
    },
    created(){
        this.getinfo();
    }
}
</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
.Drawing{
    // .padding(100,0,0,0);
}
</style>


