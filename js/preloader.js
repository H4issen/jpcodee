(function () {
	var loader = document.getElementById('loader');

	function hideLoader() {
		var elapsed = Date.now() - startTime;
		var delay = Math.max(0, 600 - elapsed);
		setTimeout(function () {
			loader.classList.add('hidden');
		}, delay);
	}

	var startTime = Date.now();
	var images = Array.from(document.images);
	if (images.length === 0) {
		hideLoader();
		return;
	}

	var loaded = 0;
	function onLoad() {
		loaded++;
		if (loaded >= images.length) {
			hideLoader();
		}
	}

	images.forEach(function (img) {
		var temp = new Image();
		temp.onload = onLoad;
		temp.onerror = onLoad;
		temp.src = img.src;
		if (temp.complete) {
			onLoad();
		}
	});

	setTimeout(hideLoader, 10000);
})();
