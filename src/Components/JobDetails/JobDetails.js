import React, { useEffect } from 'react';

const JobDetails = () => {
    useEffect(() => {
        fetch('http://localhost:4000/jobs/_id')
            .then((response) => response.json())
            .then((json) => {
               console.log(json)
            });

    }, [Math.random])
    return (
        <div>
            
        </div>
    );
};

export default JobDetails;