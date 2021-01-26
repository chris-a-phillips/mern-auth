import React, { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import {
	HeaderContainer,
	HeaderWrapper,
	HomeLink,
	NavBar,
	NavLink,
	UserButton,
	UserContainer,
	UserInfo
} from './SCHeader';
import axios from 'axios';

const Header = () => {
	const { user, setUser } = useContext(UserContext);

	const logout = () => {
		setUser(null);
		
		// user condition is for testing purposes
		if (user.username !== 'spongebob') {
			const logoutURL = 'http://localhost:8000/token/logout/';

			axios({
				method: 'post',
				url: logoutURL,
				headers: {
					Authorization: `Token ${user.token}`,
				},
			});
		}
	};

	console.log(user);

	return (
		<HeaderWrapper>
			<HeaderContainer>
				<HomeLink to='/home'>Home</HomeLink>
				<UserContainer>
				{!user ? null : (
						<UserInfo>{user.username}</UserInfo>
				)}
				{!user ? (
					<UserButton to='/login'>Login</UserButton>
					) : (
						<UserButton to='/' onClick={logout}>
						Logout
					</UserButton>
				)}
				</UserContainer>
			</HeaderContainer>
			<NavBar>
				<NavLink to='/'>Landing Page</NavLink>
				<NavLink to='/dashboard'>Dashboard</NavLink>
				<NavLink to='/postjob'>Post Job</NavLink>
				<NavLink to='/listings'>Listings</NavLink>
			</NavBar>
		</HeaderWrapper>
	);
};

export default Header;
