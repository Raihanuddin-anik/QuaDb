import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams()
    const [JobDetails, setJobDetails] = useState({})
    console.log(id)
    useEffect(() => {
        fetch(`https://thawing-ridge-17752.herokuapp.com/jobs/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setJobDetails(json)
            });

    }, [Math.random])
    return (
        <div>
            <Card style={{ textAlign: "center" }}>
                <Card.Body>
                    <h3 variant="primary">Developer Jobs</h3>
                    <Card.Title> Job Title: </Card.Title>
                    <Card.Text>
                        Job Body :{JobDetails.Title}
                    </Card.Text>
                    <p>Company Name: </p>
                    <Link to="/apply">  <Button variant="primary">Apply Now</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default JobDetails;