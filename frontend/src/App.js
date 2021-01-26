import React, { useState, useMemo } from 'react';
import { BrowserRouter as Link, Switch, Route } from 'react-router-dom';
import { MainContainer, PageWrapper } from './AppStyles';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { UserContext } from './utils/UserContext';
import './App.css';
import Listings from './pages/Listings/Listings';

function App() {
	const [test, setTest] = useState('test')
	const [user, setUser] = useState(null);
	const value = useMemo(() => ({user, setUser}), [user,setUser])

	return (
		<PageWrapper>
				<UserContext.Provider value={value}>
					<Header value={value}/>
					<MainContainer>
						main
						<Switch>
							<Route path='/' exact component={Landing} />
							<Route
								path='/home'
								exact
								render={() => <Home test={test} />}
							/>
							<Route
								path='/dashboard'
								exact
								render={() => <Dashboard test={test} setTest={setTest} />}
							/>
							<Route
								path='/login'
								exact
								render={() => <Login test={test} />}
							/>
							<Route
								path='/profile'
								exact
								render={() => <Profile test={test} />}
							/>
							<Route
								path='/listings'
								render={() => <Listings test={test} />}
							/>
						</Switch>
					</MainContainer>
					<Footer />
				</UserContext.Provider>
		</PageWrapper>
	);
}

export default App;
