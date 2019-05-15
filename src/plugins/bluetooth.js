const bluetooth = {
	device: {},

	init: function(namePrefix) {
		let requestDeviceOptions = {
			acceptAllDevices: true
		}
		if (namePrefix) {
			requestDeviceOptions = {
				filters: [{ namePrefix: [namePrefix] }]
			};
		}
		return (
			navigator.bluetooth
			.requestDevice(requestDeviceOptions)
			.then(device => {
				device.gatt.connect();
				this.device = device;
				return device
			})
			.catch(error => {
				console.log(error);
			})
		);
	},
}

export default bluetooth;