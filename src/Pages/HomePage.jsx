import React from "react";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";
import ErrorPage from "./ErrorPage";
import { ErrorBoundary } from "react-error-boundary"

const HomePage = () => {
  return (
    <>
    <ErrorBoundary fallback={<h1>This error</h1>}>
    <NavBar/>
    <div className="container">
      <motion.h1
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ type: "tween", duration: 1.5 }}
        className="welcome-text"
      >
        Welcome Friend!
      </motion.h1>
      <p className="home-paragraph">
        My name is Daniel Seyi, I am an aspiring frontend developer currently
        studying at Altschool Africa. This is a counter app, given to me as a
        project to hone my react js skill. Please try it out
      </p>
      <ErrorPage/>
    </div>
    </ErrorBoundary>
    </>
  );
};

export default HomePage;
