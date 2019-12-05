import React from 'react';
import { render } from 'react-dom';
import Canvas from './atoms/canvas';

function App() {
	return (
		<Canvas>
			hello world
		</Canvas>
	);
}

render(<App />, document.getElementById('app'));
