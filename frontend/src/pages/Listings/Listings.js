import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import { JobLink, ListingContainer, ListingsWrapper } from './SCListings';
import JobListPage from '../../components/JobListPage/JobListPage';
import JobShowPage from '../../components/JobShowPage/JobShowPage';

const Listings = () => {
	const [data, setData] = useState();
	const [id, setId] = useState();

    useEffect(() => {
        const url = 'http://localhost:4000/api/jobs/';

        axios({
            method: 'get',
            url: url,
        })
        .then((res) => {
            console.log(res)
            setData(res.data)
        })
        
    }, [])

    if (!data) {
        return null
    }


    return (
		<ListingsWrapper>
			<Switch>
				<Route exact path={'/listings'}>
					<JobListPage data={data} setId={setId} />
				</Route>
                <Route>
					<JobShowPage
						data={data}
						// exact
						// path={`/listings/${id}`}
						id={id}
					/>
				</Route>
			</Switch>
		</ListingsWrapper>
	);
};

export default Listings;