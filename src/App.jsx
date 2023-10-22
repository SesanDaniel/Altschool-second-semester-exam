import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CounterPage from "./Pages/CounterPage";
import NotFound404 from "./Components/Error404";


const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/counter" element={<CounterPage/>}/>
      <Route path="*" element={<NotFound404 />} />
    </Routes>
    </>
  );
};


export default App;
