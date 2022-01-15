import logo from './logo.svg';
import './App.css';
import Jobs from './Components/Jobs/Jobs';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Apply from './Components/Apply/Apply';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
