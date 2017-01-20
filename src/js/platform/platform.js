var Platform = module.exports;

Platform.version = function() {
	Pebble.addEventListener("ready", function() {
		if (Pebble.getActiveWatchInfo) {
			return Pebble.getActiveWatchInfo().platform;
		} else {
			return 'aplite';
		}
	};
});