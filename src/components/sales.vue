<template>
	<div class="sales">
		<div class="crumbs">
			<span>Продажи</span>
		</div>
		<div class="sales_content">
			<div class="content_panel">
				<input type="text" name="search" class="form-control search">
				<button class="btn btn-primary">btn</button>
				<button class="btn btn-danger">btn</button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
	.sales_content {
		margin: 15px;
		background: white;
		border-radius: 10px;
	}
	.content_panel {
		padding: 15px;
		display: flex;
	}
	.content_panel > button {
		margin-left: 15px;
	}
	.search {
		width: 300px;
	}
</style>