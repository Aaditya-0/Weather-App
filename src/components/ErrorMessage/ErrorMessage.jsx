import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h3 className="error-title">Oops! Something went wrong</h3>
        <p className="error-message">{message}</p>
        {onRetry && (
          <button 
            onClick={onRetry}
            className="retry-button"
          >
            🔄 Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
