<template>
	<div class="content">
		<Header/>
		<SideBar/>
		<div class="main_content">
			<div class="main_content-section">
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
			SideBar
		}
	}
</script>
<style type="text/css">
	.content {
		min-height: 100vh;
		display: flex;
	}
	.main_content {
		background: #e1ebed;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column; 
		height: -webkit-fill-available;
	}
	.main_content-section {
		height: 100%;
		margin: 50px 0 0 0;
		flex: 1 0 auto;
	}
</style>