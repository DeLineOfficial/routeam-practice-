<template>
	<div class="sidebar-active">
		<div class="sidebar_profile">
			<img src="../assets/profile/avatar.jpg">
			<div class="sidebar_profile-menu">
				<span>Админ..</span>
				<img src="../assets/chevron-down-solid.png">
				<div class="sidebar_profile-menu-active">
					
				</div>
			</div>
		</div>
		<div class="sidebar_list">
			<div class="sidebar_list-content">
				<div v-on:click="ShowList()" class="sidebar_list-element">
					<img src="../assets/book.png">
					<p>Справочник</p>
					<img src="../assets/chevron-list.png">
				</div>
				<ul v-if="List == true">
					<li v-on:click="$parent.activeTab = 'drivers'">Водители</li>
					<li>Направления</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'sidebar',
		data() {
			return {
				List: false,
			}
		},
		methods: {
			ShowList() {
				if (this.List == false) {
					this.List = true
				}
				else {
					this.List = false;
				}
			}
		}
	}
</script>
<style type="text/css">
	.sidebar-active {
		width: 300px;
	}
	.sidebar-disable {
		width: 70px;
		height: 100%;
		text-align: center;
	}
	.sidebar_profile {
		padding-top: 20px;
		margin-top: 50px;
		width: 100%;
		height: 180px;
		background: url('../assets/profile/background-profile.jpg');
		background-size: cover;
		display: flex;
		flex-direction: column;
	}
	.sidebar_profile > img {
		border: 2px solid white;
		width: 80px;
		height: 80px;
		object-fit: cover;
		border-radius: 50px;
		margin: 0 auto;
	}
	.sidebar_profile-menu-active {
		display: none;
	}
	.sidebar_profile-menu {
		align-items: center;
		margin-top: auto;
		height: 50px;
		background: rgba(0, 0, 0, 0.3);
		color: white;
		display: flex;
		position: relative;
		padding: 0 30px;
	}
	.sidebar_profile-menu:hover {
		transition: 0.3s;
		background: rgba(0, 0, 0, 0.5);
	}
	.sidebar_profile-menu > img {
		margin-left: auto;
		height: 10px;
	}
	.sidebar_list {
		margin-top: 30px;
		color: #626262;
		display: flex;
		flex-direction: column;
	}
	.sidebar_list-content {
		margin: 0 auto;
		width: 80%;
	}
	.sidebar_list-element {
		cursor: pointer;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.sidebar_list-element > p {
		font-size: 18px;
		font-weight: 500;
	}
	.sidebar_list > div > ul {
		margin-left: 30px;
	}
	.sidebar_list-element > img {
		height: 10px;
	}

</style>