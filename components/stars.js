import * as THREE from 'three';
export function getRandomStarField(numberOfStars, width, height) {
    var canvas = document.createElement('CANVAS');

	canvas.width = width;
	canvas.height = height;

	var ctx = canvas.getContext('2d');

	ctx.fillStyle="black";
	//ctx.globalAlpha = 1
	ctx.fillRect(0, 0, width, height);

	for (var i = 0; i < numberOfStars; ++i) {
		var radius = Math.random() * 2;
		var x = Math.floor(Math.random() * width);
		var y = Math.floor(Math.random() * height);

		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'white';
		ctx.fill();
	}

	var texture = new THREE.Texture(canvas);
	texture.needsUpdate = true;
	return texture;
};