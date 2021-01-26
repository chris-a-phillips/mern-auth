import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import axios from 'axios';
import { PostJobWrapper } from './SCPostJob';

const PostJob = () => {
    const { user, setUser } = useContext(UserContext);

	const handleSubmit = (event) => {
		event.preventDefault()
		axios({
			method: 'post',
			url: 'http://localhost:4000/api/jobs',
			headers: {
				Authorization: `Token ${user.token}`,
			},
			data: 'data'
		}).then((res) => {
			console.log(res);
		});
	}

	return (
		<PostJobWrapper>
			<h1>Post Job</h1>
			<form
			onClick={handleSubmit}
			>
				<button>Submit</button>
			</form>
		</PostJobWrapper>
	);
};

export default PostJob;
