<template>
        <div>
            {{moduleData}}
            <!-- <div v-for="(item,index) in moduleData" :key="index">
                {{item.value}}--{{item.component}}
                <component :is="item.component" :bindValue.sync="item" @changeData="changeData"></component>
            </div> -->
                <componentItem :key="index" :item="item" v-for="(item, index) in moduleData"></componentItem>

        </div>
</template>



<script>
import dataPage2 from '../data/page1.js'
import typeInput from './component/input'
import typeRadio from './component/radio'
import componentItem from './component/componentItem'

export default {
    name:'page2'  ,
    data(){
        return{
            moduleData:dataPage2[0].componentList
        }
    },
    methods:{
      changeData(val){
          console.log(val)
      }
    },
    components:{
        typeInput,
        typeRadio,
        componentItem
    }
}
</script>