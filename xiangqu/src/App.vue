<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from './components/Home'
export default {
  name: 'App',
  components:{Home},
  data(){
    return {
      name:1
    }
  }
}
</script>

