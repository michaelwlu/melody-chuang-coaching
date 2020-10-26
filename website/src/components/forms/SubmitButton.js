import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const SubmitButton = ({ isLoading }) => {
  return (
    <div>
      <button
        type="submit"
        className={`${
          isLoading ? 'bg-themeblue-400' : 'bg-gray-900'
        } flex items-center justify-center w-full px-4 py-2 tracking-wider text-white uppercase transition duration-200 ease-out rounded cursor-pointer md:w-32 hover:bg-themeblue-400 focus:bg-themeblue-400 focus:outline-none`}
        disabled={isLoading}
      >
        <LoadingSpinner isLoading={isLoading} />
        <div className={isLoading ? 'invisible' : 'visible'}>Submit</div>
      </button>
    </div>
  );
};

export default SubmitButton;
