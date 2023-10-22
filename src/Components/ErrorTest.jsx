import React, { useState } from "react";
import { Link } from "react-router-dom";

const ErrorTest = (props) => {
  const [hasError, setHasError] = useState(false);
  if (hasError) throw new Error("An error occured");

  return (
    <div>
      <div className="error-button">
        <Link className="btn error-btn" onClick={() => setHasError(true)}>
          Error Test
        </Link>
      </div>
    </div>
  );
};

export default ErrorTest;
