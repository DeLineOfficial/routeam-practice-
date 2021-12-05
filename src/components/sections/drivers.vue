<template>
	<div class="drivers">
		<div class="crumbs">
			<span>Список водителей</span>
		</div>
		<div class="section_content">
			<div class="content_panel">
				<input type="text" name="search" class="form-control search">
				<button class="btn btn-primary">Поиск</button>
				<button class="btn btn-danger">Очистить</button>
			</div>
			<table>
				<thead>
					<tr>
						<th>Фамилия</th>
						<th>Имя</th>
						<th>Отчество</th>
						<th>Свободно</th>
						<th>Пол</th>
						<th>Дата рождения</th>
						<th>Активность</th>
						<th>Действия</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>(Заглушка)</td>
						<td>(Заглушка)</td>
						<td>(Заглушка)</td>
						<td>(Заглушка)</td>
						<td>(Заглушка)</td>
						<td>(Заглушка)</td>
						<td>(Заглушка)</td>
						<td>(Заглушка)</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'drivers',
		data() {
			return {
				driverModels: [],

			}
		},
		async mounted() {
			const driverModels = await fetch('http://core.t2.routeam.ru/api/dictionary/drivers');
			if (driverModels.status === 200) {

				const response = await driverModels.json();
				if (response.status === false) {
					return console.log('driverModels[error]');
				}
			}
		},
		methods: {

		}
	}
</script>
<style type="text/css">
	
</style>