import React, { useState } from 'react';
import "../App.css";

const ErrorPage = (props) => {
    const [ hasError, setHasError ] = useState(false);

    if(hasError) {
        throw new Error("An error occured")
    }

    return (
        <div className='error-button'>
            <button className='btn error-btn' onClick={setHasError}>Error Test</button>
        </div>
    );
};

export default ErrorPage;