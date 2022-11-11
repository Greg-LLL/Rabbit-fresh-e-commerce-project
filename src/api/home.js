import request from "@/utils/request";

// 获取侧边栏最后的品牌
export  const findBrand =(limit) =>{
    return request('/home/brand','get',{limit})
}

// 获取轮播图的广告图
export const findBanner = () =>{
    return request('/home/banner','get')
}