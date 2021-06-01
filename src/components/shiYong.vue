<template>
  <div >
    <input type="text" v-model='username'>
    <p>{{username}}</p>
     
       <el-input  v-model="password" prefix-icon="iconfont icon-lock"
     :type="showPass ? 'text' : 'password'"  ></el-input><!--三元运算 condition ? expr1 : expr2    成立就表达前面，false就表达后面-->
     <i :class="showPass? icon1: icon2" style="position: absolute; right: 1rem; " @click="showPass=!showPass"></i>
     <br>
     <button @click="back">返回</button>
  </div>
</template>
<script>
import router from '../router'
export default {
data(){
  return{
        username:'juewu',
        password:'666',
      showPass:false,
      icon1:'iconfont icon-android',/*我都不敢相信这样写就能获取图标。。 */
      icon2:'iconfont icon-eye',
  }

},
methods:{
  back(){
    router.go(-1)
  }
}
}
</script>
<style lang='less' scoped>

</style>