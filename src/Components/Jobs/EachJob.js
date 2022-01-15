import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EachJob = ({props}) => {
    console.log(props)
    return (
        <div className="col-md-4 col-6 mt-5">
            
        <Card style={{ textAlign:"center"}}>
           <Card.Body>
               <h3 variant="primary">Developer Jobs</h3>
               <Card.Title> Job Title: </Card.Title>
               <Card.Text>
                  Job Body : 
               </Card.Text>
               <p>Company Name: </p>
             <Link to="/apply">  <Button variant="primary">Apply Now</Button></Link>
           </Card.Body>
       </Card>
   </div>
    );
};

export default EachJob;