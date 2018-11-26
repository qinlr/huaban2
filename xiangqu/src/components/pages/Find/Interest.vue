<template>
    <div class="Interest">
        <Info></Info>
        <allList :new-data="true" :father-data="url"></allList>
    </div>
</template>
<script>
// import FindList from './FindList'
import Info from '../../common/Info'
import allList from '../../common/allList'
export default {
    name:'Interest',
    components:{Info,allList},
    data(){
        return {
            url:'5017d172705cbe10c0000006'           
        }
    },
    methods:{
    }
}
</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
.Interest{
    // .padding(100,0,0,0);
}
</style>


