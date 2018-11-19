import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Navigator } from "./pages/navigator";
import { store } from "./redux/store";

const App = () => {
	return (
		<Provider
			store={store}
		>
			<Navigator/>
		</Provider>
	);
};

ReactDOM.render((
	<App/>
), document.getElementById('root'));
