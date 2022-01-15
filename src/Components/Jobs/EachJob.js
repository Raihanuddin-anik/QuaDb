import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EachJob = ({JbData}) => {
    console.log(JbData._id)
    return (
        <div className="col-md-4 mt-5">
         <Link to ={`/jobdetails/${JbData._id}`} >   
         <Card >
           <Card.Body>
               <h3 variant="primary">Developer Jobs</h3>
               <Card.Title> Job Title:{JbData.Title} </Card.Title>
               <Card.Text>
                  Job Body : {JbData.body}
               </Card.Text>
               <p> Technology : {JbData.name} </p>
             <Link to="/apply">  <Button variant="primary">Apply Now</Button></Link>
           </Card.Body>
       </Card>
       </Link>
   </div>
    );
};

export default EachJob;