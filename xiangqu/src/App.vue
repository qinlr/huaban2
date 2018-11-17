<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Home from './components/Home'
import Header from './components/common/Header'
export default {
  name: 'App',
  components:{Home,Header},
  data(){
    return {
      name:1
    }
  }
}
</script>

