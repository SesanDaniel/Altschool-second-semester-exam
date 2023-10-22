import React, { useState } from "react";
import { Link } from "react-router-dom";

const ErrorBoundaryPage = (props) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("An error occured");
  }
  return (
    <div>
      
        <div className="error-button">
          <Link to="/errortest" className="btn error-btn" onClick={setHasError}>
            Error Test
          </Link>
        </div>
    </div>
  );
};

export default ErrorBoundaryPage;
