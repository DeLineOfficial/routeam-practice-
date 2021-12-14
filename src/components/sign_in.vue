<template>
	<div class="sign">
		<div class="inputs_conteiner">
			<p>Логин</p>
			<input class="form-control" type="text" v-model="login" name="login">
			<p>Пароль</p>
			<input class="form-control" type="password" v-model="password" name="password">
			<button class="btn" v-on:click="SignIn()">Войти</button>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'sign',
		data() {
			return {
				sigi_in_conteiner: [],
				login: '',
				password: ''
			}
		},
		async mounted() {
			const sigi_in_conteiner = await fetch('https://api.github.com/users/xiaotian/repos');
			if (sigi_in_conteiner.status === 200) {

				const response = await sigi_in_conteiner.json();
				console.log(response);
				if (response.status === false) {
					return console.log('driverModels[error]');
				}
			}
		},
		methods: {
			async SignIn() {
				let fd = new FormData();
				fd.append('password', this.login);
				fd.append('login', this.password);

				const request = await fetch('http://core.t2.routeam.ru/auth/sso', {
                    method: 'POST',
                    body: fd
                });
                if (request.status !== 200) {
                    return console.error('error');
                }
			}
		}
	}
</script>
<style type="text/css">
	.sign {
		display: flex;
		position: absolute;
		width: 100%;
		min-height: 100vh;
	}
	.inputs_conteiner {
		width: 100%;
		display: flex;
		flex-direction: column;
		background: rgba(155, 155, 155, 0.4);
		padding: 15px;
		align-items: center;
	}
	.inputs_conteiner > p {
		margin-top: 15px;
	}
	.inputs_conteiner > input {
		width: 30%;
		text-align: center;

	}
	.inputs_conteiner > button {
		margin-top: 15px;
	}
</style>