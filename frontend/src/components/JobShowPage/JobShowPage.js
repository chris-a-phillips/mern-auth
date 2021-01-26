import React, { useState, useEffect } from 'react';
import axios from 'axios'

const JobShowPage = ({ id }) => {
    const [data, setData] = useState('')

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:4000/api/jobs/${id}`
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
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.owner.email}</p>
        </div>
    );
};

export default JobShowPage;