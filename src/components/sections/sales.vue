<template>
	<div class="sales">
		<div class="crumbs">
			<span>Продажи</span>
		</div>
		<div class="sales_content">
			<div class="content_panel">
				<input type="text" name="search" class="form-control search">
				<button class="btn btn-primary">Поиск</button>
				<button class="btn btn-danger">Очистить</button>
			</div>
			<table>
				<tr>
					<th>Рейс</th>
					<th>Дата и время</th>
					<th>ТС</th>
					<th>Свободно</th>
					<th>Статус рейса</th>
					<th>Действия</th>
					<th>Ведомости</th>
				</tr>
				<tr>
					<td>(Заглушка)</td>
					<td>(Заглушка)</td>
					<td>(Заглушка)</td>
					<td>(Заглушка)</td>
					<td>(Заглушка)</td>
					<td>(Заглушка)</td>
					<td>(Заглушка)</td>
				</tr>
				
			</table>
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
	table {
		margin: 15px;
		width: 100%;
	}
	th {
		border-bottom: 1px solid #eee; 
	}
	th, td {
		padding: 10px 0;
	}
</style>