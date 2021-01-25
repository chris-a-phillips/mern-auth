import React, { useEffect, useContext } from 'react';
import axios from 'axios'
import { TokenContext } from '../../TokenContext';
import './Listing.css'

const Listing = ({ setJobs }) => {
    const jobs = useContext(TokenContext);
	console.log('jobs:', jobs)
	
	useEffect(() => {
		const url = 'http://localhost:4000/api/jobs/';

		axios({
			method: 'get',
			url: url,
		}).then((res) => setJobs(res.data));
	}, []);

	return (
		<div>
			{jobs
				? jobs.map((job) => {
						return (
							<div key={job._id}>
                                <p>{job.title}</p>
                                <p>{job.description}</p>
                                <p>{job.owner.email}</p>
							</div>
						);
				})
				: null}
		</div>
	);
};

export default Listing;
