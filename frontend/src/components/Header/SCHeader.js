import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
	width: 100%;
`;

export const HeaderContainer = styled.header`
	padding: 15px 20px;
	background-color: #264653;
	display: flex;
	justify-content: space-between;
`;

export const NavBar = styled.nav`
	padding: 10px;
	background-color: #2a9d8f;
	display: flex;
	justify-content: space-evenly;
`;

export const UserContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const UserInfo = styled.div`
	padding: 10px;
`;

export const HomeLink = styled(Link)`
	text-decoration: none;
	border: solid black 3px;
	padding: 5px;
	color: white;
	`;

export const UserButton = styled(Link)`
	text-decoration: none;
	border: solid black 3px;
	padding: 5px;
	color: white;
	`;

export const NavLink = styled(Link)`
	text-decoration: none;
	padding: 5px;
	border: solid gray 2px;
	color: #000;
	`;