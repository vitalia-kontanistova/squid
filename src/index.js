import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './redux/redux_store';
import reportWebVitals from './reportWebVitals';

let treeRender = () => {

	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={store.getState()} dispatch={store.dispatch.bind(store)} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);

};

treeRender();
store.subscribe(treeRender);

reportWebVitals();
