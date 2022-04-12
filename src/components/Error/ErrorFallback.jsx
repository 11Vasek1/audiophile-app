import React from 'react';
import Button from '../UI/Button';

import './Error.scss';
import './../../scss/App.scss';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error">
      <div className="container">
        <div className="error__box">
          <p className="error__text">Something Went Wrong:</p>
          <Button onClick={resetErrorBoundary}>Try again</Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
