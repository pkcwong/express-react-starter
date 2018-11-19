import React from 'react';
import ReactDOM from 'react-dom';
import { Navigator } from './pages/navigator';

const App = () => {
	return (
		<Navigator/>
	);
};

ReactDOM.render((
	<App/>
), document.getElementById('root'));
