import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './redux/state';
import reportWebVitals from './reportWebVitals';

let treeRender = (state) => {

	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={store.state} addPost={store.addPost.bind(store)}
					changePostTextarea={store.changePostTextarea.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);

};

treeRender(store.state);

store.subscribe(treeRender);

reportWebVitals();
