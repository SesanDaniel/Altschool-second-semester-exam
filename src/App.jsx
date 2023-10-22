import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CounterPage from "./Pages/CounterPage";
import NotFound404 from "./Components/Error404";
import ErrorPage from "./Pages/ErrorPage";


const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/counter" element={<CounterPage/>}/>
      <Route path="*" element={<NotFound404 />} />
      <Route path="/errortest" element={<ErrorPage/>}/>
    </Routes>
    </>
  );
};


export default App;
