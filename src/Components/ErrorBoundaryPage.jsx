import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

const ErrorBoundaryPage = (props) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("An error occured");
  }
  return (
    <div>
      <ErrorBoundary
        fallback={<h1 className="error-band">An Error has occured ⚠️</h1>}
      >
        <div className="error-button">
          <Link to="/errortest" className="btn error-btn" onClick={setHasError}>
            Error Test
          </Link>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default ErrorBoundaryPage;
