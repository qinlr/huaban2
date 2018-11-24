<template>
    <div class="Drawing">
        <TasteNav :falist='this.$router.history.current.params.id'></TasteNav>
        <allList :new-data="true" :father-data="url"></allList>
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
            url:'d172705cbe10c0000006',
            // list:{}        
        }
    },
    computed:{
        list(){
            return this.$router.history.current.params.ite;
        }
    },
    methods:{
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


