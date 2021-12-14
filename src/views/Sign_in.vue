<template>
	<div class="content">
		<modal v-if="activeModal == true"/>
		<div class="decoration_panel">
			<img src="../assets/bus.jpg">
		</div>
		<div class="signin">
			<div class="signin_content">
				<span>Добро пожаловать в систему управления продажами БРОНЕВ</span>
				<div class="signin_authorization">
					<span>Для продолжениия работы необходимо пройти авторизацию</span>
					<button class="btn btn-primary" v-on:click="openModal()">Войти</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import modal from '@/components/sign_in.vue';
	export default {
		name: 'signin',
		components: {
			modal,
		},
		data() {
			return {
				activeModal: false,
			} 
		},
		methods: {
			openModal() {
				if (this.activeModal == false) {
					this.activeModal = true
				}
			}
		}
	}
</script>
<style type="text/css">
	.content {
		align-items: center;
		display: flex;
		width: 100%;
		height: 100vh;
	}
	.decoration_panel {
		height: 100%;
		width: 35%;
		background: black;
	}
	.decoration_panel > img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.signin {
		margin: 0 auto;
		font-size: 32px;
		display: flex;
		flex-direction: column;
	}
	.signin_content {
		margin: 0 auto;
		width: 70%;
	}
	.signin_authorization {
		display: flex;
		flex-direction: column;
	}
	.signin_authorization > span {
		font-size: 22px;
	}
	.signin_authorization > a > button {
		margin-top: 30px;
		width: 100%;
	}
</style>