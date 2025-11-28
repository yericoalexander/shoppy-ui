import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'primary' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-primary',
    white: 'border-white',
    gray: 'border-gray-600'
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin`}></div>
  );
};

export const LoadingPage = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
      <LoadingSpinner size="xl" />
      <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">{message}</p>
    </div>
  );
};

export const LoadingOverlay = ({ message = "Processing..." }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center z-[9999]">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 flex flex-col items-center">
        <LoadingSpinner size="lg" />
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;