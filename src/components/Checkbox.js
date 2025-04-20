import React, { useState } from 'react';

function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(prev => !prev)}
      />
      
    </label>
  );
}

export default Checkbox;
