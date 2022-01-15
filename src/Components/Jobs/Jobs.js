import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import EachJob from './EachJob';


const Jobs = () => {
    const [Jobs, SetJobs] = useState([]);
    const [AllJobs, SetALLJobs] = useState([])

    console.log(Jobs)

    const React = (e) => {
        const pg = e.target.value;
        const result1 = AllJobs.filter(jb => jb.name === pg);
        SetJobs(result1)
    }

    const Angular = (e) => {
        const bs = e.target.value;
        const result2 = AllJobs.filter(jb => jb.name === bs);
        console.log(result2)
        SetJobs(result2)
    }

    const Vue = (e) => {
        const er = e.target.value;
        const result3 = AllJobs.filter(jb => jb.name === er);
        console.log(result3)
        SetJobs(result3)
    }
    const All = () => {
        SetJobs(AllJobs)
    }


    useEffect(() => {
        fetch('http://localhost:4000/jobs')
            .then((response) => response.json())
            .then((json) => {
                SetALLJobs(json)
                SetJobs(json)
            });

    }, [Math.random])
    return (
        <Container>
            <div className="row">
                <div>
                    <input type="radio" onClick={React} name="company" className="p-2" value="React" /><span className="me-2">React</span>
                    <input type="radio" onClick={Angular} name="company" value="Angular" /><span className="me-2">Angular</span>
                    <input type="radio" onClick={Vue} name="company" value="Vue" /><span className="me-2">Vue</span>
                    <input type="radio" onClick={All} name="company" value="All" /><span className="me-2">All</span>


                </div>
                {Jobs.length === 0 && <p className="text-center">Loading..</p>}
                {
                    Jobs.map(JbData => <EachJob JbData={JbData} key={JbData._id} />)
                }

            </div>
        </Container>
    );
};

export default Jobs;