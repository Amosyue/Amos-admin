// var tep=`<template>
// <div>
//         {{name}}   <el-button @click="changename">修改名字</el-button>

// </div>
// </template>
// <script>
// export default {
//         name:'name',
//         data(){
//                 name:'huangyue'
//         },
//         method:{
//                 changename(){
//                         this.name="wang" 
//                 }
//         }
// }
// </script>`



let tep = {
        template:`<div><template>
        <div>
                {{name}}   <el-button @click="changename">修改名字</el-button>
        
        </div>
        </template></div>`,
        data:`{
                name:'huangyue'
        }`,
        method:`{
                changename(){
                        this.name="wang" 
                }
        }`

}
export default tep;