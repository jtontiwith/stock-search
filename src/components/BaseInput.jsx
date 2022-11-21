import React from 'react';

const BaseInput = ({ onChange, placeHolder }) => {
  return (
    <input onChange={onChange} type="text" className='grow pl-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-400 rounded-md' placeholder={placeHolder} />
  );
};

export default BaseInput;