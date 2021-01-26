import React from 'react';
import { JobLink, ListingContainer } from './SCJobListPage';

const JobListPage = ({ data, setId }) => {
	console.log(data);

	return (
		<div>
			{data.map((job) => {
				return (
					<ListingContainer
						key={job._id}
                        onClick={() => setId(job._id)}
                        >
						<JobLink to={`/listings/${job._id}`}>
							<p>{job.title}</p>
							<p>{job.description}</p>
							<p>{job.owner.email}</p>
						</JobLink>
					</ListingContainer>
				);
			})}
		</div>
	);
};

export default JobListPage;
