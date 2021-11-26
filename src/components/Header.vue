<template>
	<header>
		<img src="../assets/logo.png" id="logo">
		<div class="header_elements">
			<div id="burger">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="header_elements-adress">
				<a href="/sales">Продажи</a>
				<a href="#">Маршруты</a>
			</div>
		</div>
		<div class="profile">
			<img src="../assets/profile-logo.jpg">
		</div>
	</header>
</template>
<script type="text/javascript"></script>
<style type="text/css">
	header {
		position: fixed;
		color: white;
		height: 50px;
		width: 100%;
		background: black;
		padding: 0 15px;
		display: flex;
		align-items: center;
	}
	#logo {
		height: 80%;
	}
	.header_elements {
		margin-left: 15px;
		align-items: center;
		display: flex;
	}
	#burger {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		width: 30px;
		height: 30px;
		padding: 5px;
	}
	#burger > div {
		align-items: center;
		border-radius: 10px;
		margin: 2px;	
		width: 20px;
		height: 2px;
		background: white;
	}
	.header_elements > .header_elements-adress > a {
		text-decoration: none;
		color: white;
		margin-left: 15px;
		font-size: 18px;
	}
	.profile {
		margin-left: auto;
		display: flex;
		align-items: center;
		height: 100%;
	}
	.profile > img {
		border: 2px solid white;
		cursor: pointer;
		object-fit: cover;	
		width: 40px;
		height: 40px;
		border-radius: 50px;
	}
</style>