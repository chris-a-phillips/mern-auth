import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
		<div>
			Header
			<Link to='/'>Home</Link>
			<Link to='/listing'>Listing</Link>
			<Link to='/login'>Login</Link>
		</div>
	);
};

export default Header;