import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { IndexPage } from "./pages/index-page/index-page";
import { store } from "./redux/store";

export class App extends React.Component {
	render() {
		return (
			<Provider
				store={store}
			>
				<BrowserRouter>
					<Route
						path='/'
						component={IndexPage}
					/>
				</BrowserRouter>
			</Provider>
		);
	}
}
