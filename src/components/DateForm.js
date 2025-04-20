import React, { useState } from "react";


function DateForm() {
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Vybrané datum je: ${date}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          // můžeš přidat omezení:
          // min="2025-01-01"
          // max="2025-12-31"
        />
      </label>
    </form>
  );
}


export default DateForm;

