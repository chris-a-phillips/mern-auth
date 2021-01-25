import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Listing from './components/Listing/Listing';
import Login from './components/Login/Login';

import { TokenContext } from './TokenContext';
import Header from './components/Header/Header';

function App() {
	const [jobs, setJobs] = useState('');


	return (
		<div className='App'>
			<TokenContext.Provider value={jobs}>
				<Header />
				<Switch>
					<Route
						path='/listing'
						exact
						render={() => (
							<Listing
								setJobs={setJobs}
							/>
						)}
					/>
					<Route
						path='/login'
						exact
						render={() => (
							<Login
								setJobs={setJobs}
							/>
						)}
					/>
				</Switch>
			</TokenContext.Provider>
		</div>
	);
}

export default App;
