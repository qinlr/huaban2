<template>
  <div class="hello">
    <New></New>
  </div>
</template>

<script>
import New from './pages/New'//引入组件

export default {
  name: 'Home',
  components:{New},
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
