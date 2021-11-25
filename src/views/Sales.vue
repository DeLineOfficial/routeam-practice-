<template>
	<div class="content">
		<div class="sidebar-conteiner">
			<SideBar/>
		</div>
		<div class="main-content">
			<Header/>
			<div class="Sales">
				
			</div>
			<footerMenu/>
		</div>
	</div>
</template>
<script type="text/javascript">

	import Header from '@/components/Header.vue';
	import footerMenu from '@/components/footer_menu.vue';
	import SideBar from '@/components/sidebar.vue';
	export default {
		name: 'Sales',
		components: {
			Header,
			footerMenu,
			SideBar,
		}
	}
</script>
<style type="text/css">
	.content {
		min-height: 100vh;
		display: flex;
	}
	.main-content {
		background: #e1ebed;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column; 
		height: -webkit-fill-available;
	}
	.Sales {
		margin: 60px 10px 10px 10px;
		flex: 1 0 auto;
	}
</style>