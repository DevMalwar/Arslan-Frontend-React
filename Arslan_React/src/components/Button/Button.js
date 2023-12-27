import React from 'react';


const Button = ({arr}) => {

  function filterArr (id){
    const new_arr = arr.filter(elem => elem.id != id)
  }

  return (
    <button onclick={() => filterArr()}>
      delete
    </button>
  );
};

export default Button;