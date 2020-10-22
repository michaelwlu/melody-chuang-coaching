import React from 'react';

const SubmitButton = ({ isDisabled }) => {
  return (
    <div>
      <input
        type="submit"
        value="Submit"
        className="w-full px-4 py-2 tracking-wider text-white uppercase transition duration-200 ease-out bg-gray-900 rounded cursor-pointer md:w-32 hover:bg-themeblue-400"
        disabled={isDisabled}
      />
    </div>
  );
};

export default SubmitButton;
