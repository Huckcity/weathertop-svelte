<script>
	export let station;
</script>

<div class="mt-3">
	<div
		class="flex p-2 justify-around border-dashed border-2 border-gray-200 hover:border-gray-300 rounded-lg"
	>
		<div class="flex-1 mx-2 my-1 p-2 bg-gray-300 rounded-lg">
			<h3 class="text-3xl font-semibold">{station.name}</h3>
			<p class="card-subtitle mb-2 text-muted">Lat: {station.lat}</p>
			<p class="card-subtitle mb-2 text-muted">Lng: {station.lng}</p>

			<div class="d-flex mx-2 mt-5 justify-content-around">
				<a
					href="/stations/{station._id}"
					class="bg-slate-600 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-slate-800"
					>View</a
				>
				<a
					href="/stations/delete/{station._id}"
					class="bg-red-700 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-900"
					onclick="return confirm('Are you sure?');">Delete</a
				>
			</div>
		</div>
		<div class="flex-1">
			<div class="flex-1 mx-2 my-1 p-2 bg-gray-300 rounded-lg">
				<div class="grid grid-cols-1 place-items-center">
					<i class="place-self-center text-4xl md:text-8xl bi {station.latestWeatherIcon}" />
					<span class="text-2xl mt-4">{station.latestWeatherDesc}</span>
				</div>
			</div>
			<div class="flex-1 mx-2 my-1 p-2 bg-gray-300 rounded-lg">
				<span class="card-icons">
					<i class="bi bi-thermometer" style="font-size: 2em; color: rgb(150, 47, 47)" />
				</span>
				<span class="text-2xl font-semibold">Temperature</span>
				<ul class="mt-3">
					<li>{station.latestTemp}C</li>
					<li>{station.latestTempInFahrenheit}F</li>
					<li>Max: {station.maxTemp}C</li>
					<li>Min: {station.minTemp}C</li>
				</ul>
				<div class="trend">
					<i class="bi bi-arrow-{station.tempTrend}" />
				</div>
			</div>
			<div class="flex-1 mx-2 my-1 p-2 bg-gray-300 rounded-lg">
				<span class="card-icons">
					<i class="bi bi-wind" style="font-size: 2em; color: rgb(68, 150, 47)" />
				</span>
				<span class="text-2xl font-semibold ml-2">Wind</span>
				<ul class="mt-3">
					<li>{station.windBeaufort}bft</li>
					<li>{station.windDirection}</li>
					<li>Feels like {station.windChill}</li>
					<li>Max: {station.maxWindSpeed}</li>
					<li>Min: {station.minWindSpeed}</li>
				</ul>
				<div class="trend">
					<i class="bi bi-arrow-{station.windTrend}" />
				</div>
			</div>
			<div class="flex-1 mx-2 my-1 p-2 bg-gray-300 rounded-lg">
				<span class="card-icons">
					<i class="bi bi-bounding-box-circles" style="font-size: 2em; color: rgb(47, 150, 141)" />
				</span>
				<span class="text-2xl font-semibold ml-2">Pressure</span>
				<ul class="mt-3">
					<li>{station.latestPressure}hba</li>
					<li>Max: {station.maxPressure}</li>
					<li>Min: {station.minPressure}</li>
				</ul>
				<div class="trend">
					<i class="bi bi-arrow-{station.pressureTrend}" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
