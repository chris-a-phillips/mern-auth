import React, { useContext } from 'react';
import { TokenContext } from '../TokenContext';

const Page = () => {
    const jobs = useContext(TokenContext);
    console.log('jobs:', jobs)

	return (
		<div>
			{jobs
				? jobs.map((job) => {
						return (
							<div key={job._id}>
                                <p>{job.title}</p>
                                <p>{job.description}</p>
                                <p>{job.owner._id}</p>
							</div>
						);
				})
				: null}
		</div>
	);
};

export default Page;
