<template>
  	<div class="login_page">
        
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer">
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
					<el-form-item prop="username" class="login-item">
						<el-input @keyup.enter.native ="submitForm('loginForm')"  class="area" type="text" placeholder="用户名" v-model="loginForm.username" ></el-input>
					</el-form-item>
					<el-form-item prop="password" class="login-item"> 
						<el-input @keyup.enter.native ="submitForm('loginForm')" class="area" type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary"  @click="submitForm('loginForm')" class="submit_btn">SIGN IN</el-button>
				  	</el-form-item>
					<div class="tiparea">
						<p class="wxtip">温馨提示：</p>
						<p class="tip">用户名为：admin/editor<span>(可用于切换权限)</span></p>
						<p class="tip">密码为：123456</p>
					</div>
				</el-form>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
// 	import logoImg from "@/assets/img/logo.png";
	import { login } from "@/api/user";
    import { setToken } from '@/utils/auth'

	export default {
	    data(){
			return {
				loginForm: {
					username: 'admin',
					password: '123456'
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
						{ min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				}
			}
		},
		mounted(){
		},
		methods: {
			loginByWechat(){

			},
			showMessage(type,message){
                this.$message({
                    type: type,
                    message: message
                });
            },
		    submitForm(loginForm) {
				this.$refs[loginForm].validate((valid) => {
					if (valid) {
						let userinfo = this.loginForm;
						login(userinfo).then(res => {
                            debugger
							let userList = res.data.userList;
							setToken("Token",userList.token)
							this.$router.push({ path: '/' })
							// this.$store.dispatch('initLeftMenu'); //设置左边菜单始终为展开状态
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss">
    .form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>