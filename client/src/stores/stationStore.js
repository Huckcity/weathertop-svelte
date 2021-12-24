import { writable } from 'svelte/store';
import stationUtils from '../utils/station.js';

export const stationStore = writable([]);
let loaded = false;

export const fetchStations = async () => {
	if (!loaded) {
		const response = await fetch('http://localhost:3001/stations');
		const data = await response.json();
		data.forEach((station) => {
			stationUtils.generateLatestWeather(station);
			// stationUtils.generateChartData(station);
		});
		stationStore.set(data);
		loaded = true;
	}
};

export const fetchStation = async (id) => {
	if (stationStore[id]) {
		stationUtils.generateLatestWeather(stationStore[id][0]);
		return stationStore[id][0];
	}
	try {
		const response = await fetch(`http://localhost:3001/station/${id}`);
		const data = await response.json();
		stationStore[id] = data;
		stationUtils.generateLatestWeather(stationStore[id][0]);
		// stationUtils.generateChartData(stationStore[id][0]);
		return stationStore[id][0];
	} catch (err) {
		console.log(err);
		return null;
	}
};
