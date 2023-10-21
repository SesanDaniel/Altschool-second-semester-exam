import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cone from "../assets/images/cone.jpg";
// Your custom 404 error component
const NotFound404 = () => (
  <div className="error">
    <h1 className="head-404">404 - Page Not Found</h1>
    <p className="paragraph-404">
      Sorry, the page you are looking for does not exist.
    </p>
    <p className="paragraph-404">
      Click{" "}
      <Link className="back-home" to="/">
        Here
      </Link>{" "}
      to go back to Homepage... Thanks
    </p>
    <div className="error-image">
      <motion.img
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="cone"
        src={cone}
        alt=""
      />
    </div>
  </div>
);
export default NotFound404;
