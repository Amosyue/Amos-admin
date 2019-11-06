<template>
    
    <el-popover
    placement="bottom"
    width="400"
    trigger="click">
        <el-input v-model="formData.input" placeholder="请输入内容"></el-input>
        <el-input v-model="formData.name" placeholder="请输入内容"></el-input>
        <el-input  slot="reference"></el-input>
    </el-popover>
</template>
<script>
export default {
        name:'typeInput',
        data(){
            return{
                formData:{
                    input:'1111',
                    name:'huangyue'
                }
            }
        },
        methods:{
           
        },
        watch:{
            formData:{
                handler:function(newValue,oldval){
                    // this.$emit('update:bindValue', newValue)
                    this.$emit('changeData',newValue)
                },
                deep:true
            }
        }
}
</script>