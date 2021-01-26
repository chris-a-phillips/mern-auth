import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Listings = () => {
    const [jobs, setJobs] = useState('')



    useEffect(() => {
        const url = 'http://localhost:4000/api/jobs/';

        axios({
            method: 'get',
            url: url,
        })
        .then((res) => {
            console.log(res)
            setJobs(res.data)
        })
        
    }, [])

    if (!jobs) {
        return null
    }


    return (
        <div>
            {jobs.map((job) => {
                return (
                    <div key={job._id}>
                        <p>{job.title}</p>
                        <p>{job.description}</p>
                        <p>{job.owner.email}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Listings;