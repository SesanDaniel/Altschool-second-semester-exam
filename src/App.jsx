import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CounterPage from "./Pages/CounterPage";
import ErrorPage from "./Pages/ErrorPage";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <Link to="/" className="btn">Home</Link>
        <Link to="/counter" className="btn">Counter</Link>
        {/* <Link to="/error" className="btn">Error</Link> */}
      </div>
    </>
  )
}


const App = () => {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/counter" element={<CounterPage/>}/>
      <Route path="/error" element={<ErrorPage/>}/>
    </Routes>
    </>
  );
};


export default App;
