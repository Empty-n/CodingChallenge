import React, { useState, useEffect, useRef } from "react";

export default function Temperature() {
  const [Temperature, SetTemperature] = useState("");

  const handleChange = e => {
    SetTemperature(e.target.value);
  };
  return (
    <div>
      <input type="number" onChange={handleChange} />
      {Temperature}
    </div>
  );
}
