// 分类
import { topCategory } from "@/api/canstants"
import {finAllCategory} from "@/api/category"
export default {
  namespaced: true,
  state: ()=> {
    return {
      // 分类信息集合
      // 如果默认是[]数组，看不见默认的9个分类，等你数据加载完毕才会看到。
      // 所以：根据常量数据来生成一个默认的顶级分类数据，不会出现空白（没数据的情况）
      list: topCategory.map(item => ({name:item}))
    }
  },
  mutations:{
    // 加载数据成功后需要修改list所以需要mutations函数
    setList(state,paylod){
      state.list=paylod
    },
     // 修改当前一级分类下的open数据为true
    show(state,item){
      const category = state.list.find(category  => category.id ===item.id)
      category.open = true
    },
    // 修改当前一级分类下的open数据为false
    hide(state,item){
      const category = state.list.find(category =>category.id === item.id)
      category.open = false
    }
  },
  actions:{
     // 需要向后台加载数据，所以需要actions函数获取数据
    async getList({commit}){
      const {result} = await finAllCategory()
       // 给一级分类加上一个控制二级分类显示隐藏的数据open
      result.forEach(item =>{item.open = false})
      commit('setList',result)
    }
  }
}
