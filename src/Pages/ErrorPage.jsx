import React, { useState } from "react";
import "../App.css";
import { ErrorBoundary } from "react-error-boundary";

const ErrorPage = () => {
  return (
    <>
      <ErrorBoundary
        fallback={<h1 className="error-band">An Error has occured ⚠️</h1>}
      >
        <div></div>
      </ErrorBoundary>
    </>
  );
};

export default ErrorPage;
