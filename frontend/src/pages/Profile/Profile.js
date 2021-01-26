import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import axios from 'axios';
import { ProfileWrapper } from './SCProfile';

const Profile = () => {
    const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		// user condition is for testing purposes
		if (user && (user.username !== 'spongebob')) {
			const personalURL = 'http://localhost:4000/api/';
			axios({
				method: 'get',
				url: personalURL,
				headers: {
					Authorization: `Token ${user.token}`,
				},
			}).then((res) => {
				console.log(res);
				setUser({
                    ...user,
                    id: res.data.id
				});
			});
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}
	}, []);

	return (
		<ProfileWrapper>
			<h1>Profile</h1>
			{/* quick way to see user without having to console log */}
			{JSON.stringify(user)}
		</ProfileWrapper>
	);
};

export default Profile;
