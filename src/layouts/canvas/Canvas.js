import React, { createRef, useEffect } from 'react';
import './canvas.scss';
import theme from '../../theme/theme.scss';

function Canvas() {
	var canvasRef = createRef();

	useEffect(() => {
		const { current: canvas } = canvasRef;

		var ctx = canvas.getContext('2d');

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		var letters = ('0123456789ABCDEF').split('');
		// Setting up the columns
		var fontSize = 11,
			columns = canvas.width / fontSize;

		// Setting up the drops
		var drops = [];
		for (var i = 0; i < columns; i++) {
			drops[i] = 1;
		}

		// Setting up the draw function
		function draw() {
			ctx.fillStyle = 'rgba(0, 0, 0, .1)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			for (var i = 0; i < drops.length; i++) {
				var text = letters[Math.floor(Math.random() * letters.length)];
				ctx.fillStyle = theme.accentColor;
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);
				drops[i]++;
				if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
					drops[i] = 0;
				}
			}
		}

		// Loop the animation
		setInterval(draw, 33);
	}, []);



	return (
		<canvas ref={canvasRef} />
	);
}

export default Canvas;
