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

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/apply" element={<Apply />} />
          <Route
            path="jobdetails/:Id"
            element={<JobDetails />}
          />
          <Route path="/signIn" element={<SingIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
