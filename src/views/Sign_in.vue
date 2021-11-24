<template>
	<div class="content">
		<div class="decoration_panel">
			<img src="../assets/bus.jpg">
		</div>
		<div class="signin">
			<div class="signin_content">
				<span>Добро пожаловать в систему управления продажами БРОНЕВ</span>
				<div class="signin_authorization">
					<span>Для продолжениия работы необходимо пройти авторизацию</span>
					<a href="http://core.t2.routeam.ru/auth/sso" target="_blank"><button class="btn btn-primary">Войти</button></a>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	
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