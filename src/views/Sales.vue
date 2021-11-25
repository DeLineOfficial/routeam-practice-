<template>
	<div class="content">
		<Header/>
		<div class="Sales">
			
		</div>
		<footerMenu/>
	</div>
</template>
<script type="text/javascript">

	import Header from '@/components/Header.vue';
	import footerMenu from '@/components/footer_menu.vue'
	export default {
		name: 'Sales',
		components: {
			Header,
			footerMenu
		}
	}
</script>
<style type="text/css">
	.content {
		min-height: 100vh;
		display: flex;
		flex-direction: column; 
		height: -webkit-fill-available;
	}
	.Sales {
		flex: 1 0 auto;
	}
</style>