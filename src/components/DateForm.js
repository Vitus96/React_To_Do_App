import React, { useState } from "react";


function DateForm({ value, onChange }) {


  return (
    <label>
      <input
        type="date"
        value={value}
        onChange={onChange}
      // můžeš přidat omezení:
      // min="2025-01-01"
      // max="2025-12-31" 
      />
    </label>
  );
}


export default DateForm;

