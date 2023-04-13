// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar/navbar';
import Dashboard from './component/Dashboard/Dashboard';
import Addtocart from './component/Addtocart/addtocart';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addtocart" element={<Addtocart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
