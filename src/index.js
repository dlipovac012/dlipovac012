import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Canvas from './layouts/canvas';

import './styles.scss';
import Container from './layouts/container';

function App() {
	return (
		<Fragment>
			<Canvas />
			<Container>
				<span>HELLO WORLD</span>
			</Container>
		</Fragment>
	);
}

render(<App />, document.getElementById('app'));
