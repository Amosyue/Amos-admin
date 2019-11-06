<template>
  <div class="hello">
      hellohello
      <form-create v-model="fApi" ref="fc" :rule="rule" :option="option"/>
  </div>
</template>

<script>
// let 
export default {
  name: 'HelloWorld',
  data () {
    let vm 
    return {
      msg: '1111111111111111',
        fApi:{},
        mydata:null,
        option: {
        //显示表单重置按钮
            resetBtn: true,
            //表单提交事件
            onSubmit: function(formData) {
                console.log(JSON.stringify(formData));
                //按钮进入提交状态
                // debugger
                console.log(vm)
                // vm.fApi.btn.loading();
                // //重置按钮禁用
                // vm.fApi.resetBtn.disabled();
                //按钮进入可点击状态
               
            },
            mounted($f){
                var $m = $f.model();
                // debugger
                console.log("mountedmountedmountedmounted")
                vm = $f.rule
                // $m.goods_name.value += " now";
                // vm.fApi.setValue({"goods_name":"fdsfdsfd"});
            }
        },
      rule: [{
        type: "input",
        title: "商品名称",
        //label名称
        field: "goods_name",
        //字段名称
        value: "s",
        //input值,
        props: {
        "type": "text",
        //输入框类型，可选值为 text、password、textarea、url、email、date
        "clearable": false,
        //是否显示清空按钮
        "disabled": false,
        //设置输入框为禁用状态
        "readonly": false,
        //设置输入框为只读
        "rows": 4,
        //文本域默认行数，仅在 textarea 类型下有效
        "autosize": false,
        //自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }
        "number": false,
        //将用户的输入转换为 Number 类型
        "autofocus": false,
        //自动获取焦点
        "autocomplete": "off",
        //原生的自动完成功能，可选值为 off 和 on
        "placeholder": "请输入商品名称",
        //占位文本
        "size": "default",
        //输入框尺寸，可选值为large、small、default或者不设置,
        "spellcheck": false,
        //原生的 spellcheck 属性
        "required": false,
        },
        validate: [{
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
        }],
       on:{
           change(){
               alert('s')
               this.$on('fApi:input',function(cb,$f) {
                //TODO 返回自定义组件 value
                //异步触发调用无效
                cb(this.value);
                })
           }
       }
    },{
        type: "radio",
        title: "是否包邮",
        //label名称
        field: "is_postage",
        //字段名称
        value: "0",
        //input值,
        options: [{
        value: "0",
        label: "不包邮",
        disabled: false
        },
        {
        value: "1",
        label: "包邮",
        disabled: false
        },
        {
        value: "1",
        label: "未知",
        disabled: true
        },
        ],
        props: {
        "type": undefined,
        //可选值为 button 或不填，为 button 时使用按钮样式
        "size": "default",
        //单选框的尺寸，可选值为 large、small、default 或者不设置
        "vertical": false,
        //是否垂直排列，按钮样式下无效
        }
    }],
    alldata:{
        name:'huangyue'
    }
  }
 
},
created(){
    // this.$f.on('xaboy-on-change',function(){
    //     //TODO
    //     debugger
    // })
},
 methods: {
        test(){
            console.log("ssssssssssssssss")
        },
        goodsNameChange(e){
             console.log(vm)

        }
  },
}
</script>
