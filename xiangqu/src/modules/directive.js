import Vue from 'vue'

//实现回到顶部
Vue.directive('top',{
    bind(el,binding,vnode){
        //监听元素是否被点击
        console.log(binding)
        let eventType=binding.arg
         console.log(eventType)
        el.addEventListener(eventType,()=>{
          console.log('点到我了')
          document.documentElement.scrollTop=0;  
        })
       // 
    }
})
