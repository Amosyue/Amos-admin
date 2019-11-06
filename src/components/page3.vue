/*
 * @Author: 黄越 
 * @Date: 2019-11-06 10:04:42 
 * @Last Modified by: 黄越
 * @Last Modified time: 2019-11-06 10:06:39
 */
<template>
  <div>
      {{code}}
      <mychild>
        <span slot="first">111</span>  ---
        <span slot="second">222</span>  
      </mychild>
      <el-button @click="add">add+</el-button><el-button @click="qqq">qqq+</el-button>


      <el-input v-model="methodName"></el-input>
      <el-input v-model="methodCode"></el-input>
       <el-button @click="addMethod">add+</el-button>
  </div>
</template>

<script>
import mychild from './mychild.vue'
let formMixins = {
    methods: {
       add(){
         alert(0)
       }
    },
}
let vm
export default vm =  {
  
  mixins: [formMixins],
  data(){
    return {
      code:'1111',
      methodName:'',
      methodCode:''
    }
  },
  
  mounted () {
      
  },
  methods: {
    addMethod(){
        
        this.$options.methods = {...this.$options.methods,[this.methodName](){console.log("aaa")}}
        debugger
        // formMixins.
      }
  },
  components:{
    mychild
  }
}
</script>
