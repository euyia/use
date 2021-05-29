<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像区-->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
       <!--登录表单区,这个框包涵了下面三组控件-->
      <el-form ref="loginFormRef" class="login_form" :model="loginForm" :rules="loginFormRules">
        <!--用户名-->
  <el-form-item  prop="username">
    <el-input v-model="loginForm.username"  prefix-icon="iconfont icon-user"></el-input>
  </el-form-item>
  <!--密码-->
  <el-form-item  prop="password" class="mms">
    <el-input  v-model="loginForm.password" prefix-icon="iconfont icon-lock"
     :type="showPass ? 'text' : 'password'"  ></el-input><!--三元运算 condition ? expr1 : expr2    成立就表达前面，false就表达后面-->
     <i :class="showPass? icon1: icon2" style="position: absolute; right: 1rem; " @click="showPass=!showPass"></i>
     <!--这个i标签明明就没写在input里面。。为什么会显示在里面。。。。？？？？-->
    <!--按钮区<span
            class="show-pwd"
            @click="showPwd"
          >
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>--> 
  </el-form-item>
  <!--按钮区-->
  <el-form-item  class="btns">
     <el-button type="success" plain >登录</el-button>
  <el-button type="info" plain  @click="resetForm">重置</el-button>
  </el-form-item>
      </el-form>

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      loginForm:{//这个东西的绑定 然后 下面的双绑定。。没有更简单的吗
        username:'juewu',
        password:'666',
      },
      loginFormRules:{//这个主要是rules和prop的对应。。和放的位置不是input
        username:[
           { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          
        ],
        password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      },
      showPass:false,
      icon1:'iconfont icon-android',/*我都不敢相信这样写就能获取图标。。 */
      icon2:'iconfont icon-eye',
    }
  },
  methods:{
    resetForm(){
      this.$refs.loginFormRef.resetFields();
    },
    /* showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },*/
  }
  
}
</script>
<style lang="less" scoped>
.login_container{
  background-color: #6666;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 70%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.avatar_box{
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px #add;/* 这个比较少见*/ 
  position: absolute;
  left:50%;
  transform: translate(-50%,-50%);
  img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.btns{
  display: flex;
  justify-content:flex-end ;
}
.login_form{/*这个是三个小组件 统一进行迁移。这个其实是一个无形的div 贴在box上。 */
  position: absolute;
  bottom:0;/*这个我很少用到 */
  width:100%;
  padding: 0 20px;/**上下0 左右20px */
  box-sizing: border-box;
}

/*.show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #eee;
    cursor: pointer;
    user-select: none;
  }
  .showPass{
    position: absolute;
    right:1rem;
   
  }*/
</style>