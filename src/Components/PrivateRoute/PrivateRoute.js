import React, { useContext } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import {  UserContext } from '../../App';
import useAuth from '../hooks.js/auth';

function PrivateRoute({ children }) {
    const auth  = useAuth()
// const [loggedInData, setLoggedInData] = useContext(UserContext);
// console.log(loggedInData)
 
    return auth ? children : <Navigate to="/signIn" />;
  }
  export default PrivateRoute;