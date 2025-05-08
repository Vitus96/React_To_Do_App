import React, { useState } from 'react';

/*
function Checkbox() {
  return (
    <>
      <input type="checkbox" className="custom"></input>
    </>
  );
}
*/

function Checkbox({ onToggle, checked }) {
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="custom"
      >

      </input>
    </>
  );
}

export default Checkbox;
