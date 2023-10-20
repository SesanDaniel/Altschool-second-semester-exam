import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
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
    </div>
  );
};

export default HomePage;
