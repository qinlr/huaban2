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
  },
  methods:{
      gettitle(){
          if(this.$route.path=='/Find'){
              this.$store.commit('changehdtitle','发现')
          }
          console.log(this.$route.path);
      }
  },
    updated(){
        this.gettitle();
    }
}
</script>

