// 定义分类相关的API接口函数

import request from "@/utils/request";
// 获取所有的分类(顶级，二级，对应的商品推荐)
export const finAllCategory=() =>{
    return request('/home/category/head','get')
}