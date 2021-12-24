<script>
	import mqtt from 'mqtt';

	const host = 'ws://208.113.166.76:9001';
	const options = {
		keepalive: 30,
		//clientId: clientId,
		protocolId: 'MQTT',
		protocolVersion: 4,
		clean: true,
		reconnectPeriod: 1000,
		connectTimeout: 30 * 1000,
		will: {
			topic: 'WillMsg',
			payload: 'Connection Closed abnormally..!',
			qos: 0,
			retain: false
		},
		rejectUnauthorized: false
	};
	const client = mqtt.connect(host, options);

	client.on('error', (err) => {
		console.log('Connection error: ', err);
		client.end();
	});

	client.on('reconnect', () => {
		console.log('Reconnecting...');
	});

	client.on('connect', () => {
		console.log('Client connected:');
		client.subscribe('zigbee2mqtt/MotionSensor', { qos: 0 });
		client.publish('testtopic', 'ws connection demo...!', { qos: 0, retain: false });
	});

	client.on('message', (topic, message, packet) => {
		console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic);
		const jsonMessage = JSON.parse(message);
	});

	client.on('close', () => {
		console.log(' disconnected');
	});
</script>

<header class="bg-white shadow">
	<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-gray-900">Locations</h1>
	</div>
</header>
<main>
	<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
		<!-- Replace with your content -->
		<div class="px-4 py-6 sm:px-0">
			<div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
				<p>test locations page</p>

				<div id="update">gfdsgfds</div>
			</div>
		</div>
		<!-- /End replace -->
	</div>
</main>
