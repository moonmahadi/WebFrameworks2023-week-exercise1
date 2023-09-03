import React from 'react';

const Option = ({ option }) => {
  return (
    <div className="option" style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
      {option}
    </div>
  );
};


export default Option;
