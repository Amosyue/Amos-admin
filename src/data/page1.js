const dataPage2 = [
    {
        "name": "主页",
        "path": "/",
        "componentList": [
            {
                "name": "el-button",
                "text":'按钮',
                "component": "typeInput",
                "value":'我是value值1',
                "container": false,
                "type": "base",
                "enableCustomTemplate": false,
                "id": "04679c3c-f999-76a5-fd4b-01a945996967",
                "props": {
                    "title": "标题1111",
                    "content": "内容111111111",
                    "href": "baidu.com",
                    "type":'button',
                    "size": "small",
                    "round":false,
                    "disabled":true
                }
            },
            {
                "name": "el-input",
                "text":'11111',
                "component": "typeRadio",
                "container": false,
                "type": "base",
                "value":'我是value值2',
                "enableCustomTemplate": true,
                "id": "1522b0b1-7abd-270d-3d6c-68aa80831af9",
                "props": {
                    type: "text",
                    // value: "3131",
                    "v-model": "sddsds",
                    size: "large",
                    placeholder: "请选择",
                    focus:function(){alert(1)}
                }
            }
        ]
    }
]
export default dataPage2