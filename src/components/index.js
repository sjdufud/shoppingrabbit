//把components中的组件进行全局注册
//通过插件的方式

import { install } from "element-plus";
import ImageView from '@/components/ImageView/index.vue'
import Sku from '@/components/XtxSku/index.vue'
export const componentPlugin={
    install(app){
        //app.components('组件名字'，组件配置对象)
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
    }
}