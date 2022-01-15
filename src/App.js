import logo from './logo.svg';
import './App.css';
import Jobs from './Components/Jobs/Jobs';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Apply from './Components/Apply/Apply';
import JobDetails from './Components/JobDetails/JobDetails';
import SingIn from './Components/SignIn/SignIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';

export const UserContext = createContext();
export const InfoContext = createContext()

function App() {

  // const [flatDetails, setflatDetails] = useState({});
  const [UserInfo, setUserInfo] = useState({})
  console.log(UserInfo)
  return (

    <div>
      <UserContext.Provider value={[UserInfo, setUserInfo]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <PrivateRoute>
                <Jobs />
              </PrivateRoute>
            } />
            <Route path="/apply" element={<Apply />} />
            <Route path="jobdetails/:Id" element={<JobDetails />} />
            <Route path="/signIn" element={<SingIn />} />
          </Routes>
        </BrowserRouter>



      </UserContext.Provider>

    </div >

  );
}

export default App;
