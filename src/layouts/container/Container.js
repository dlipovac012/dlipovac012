import React from 'react';

import './container.scss';

function Container({ children }) { // eslint-disable-line
	return (
		<div className="container">
			{children}
		</div>
	);
}

export default Container;
