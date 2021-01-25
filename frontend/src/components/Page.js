import React, { useContext } from 'react';
import { TokenContext } from '../TokenContext';

const Page = () => {
	const job = useContext(TokenContext);

	return (
		<div>
			{job
				? job.map((stuff) => {
						return (
							<div>
								{stuff.title}
								{stuff.description}
								{stuff.owner.id}
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default Page;
