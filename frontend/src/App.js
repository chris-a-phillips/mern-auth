import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Page from './components/Page';

import { TokenContext } from './TokenContext';

function App() {
	const [job, setJob] = useState('');

	useEffect(() => {
    const url = 'http://localhost:4000/api/jobs/';
    
    axios({
      method: 'get',
      url: url,
    })
    .then((res) =>
      console.log(res))
	}, []);

	return (
		<div className='App'>
			<TokenContext.Provider value={job}>
				<Page />
			</TokenContext.Provider>
		</div>
	);
}

export default App;
