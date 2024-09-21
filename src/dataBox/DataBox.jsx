import React, { useContext } from "react";
import DataContext from "../context/dataContext"; // Ensure correct path

const DataBox = () => {
  const { aT, bT, cT, dT, eT, fT, gT, hT } = useContext(DataContext);

  return (
    <div>
      <p>aT: {aT}</p>
      <p>bT: {bT}</p>
      <p>cT: {cT}</p>
      <p>dT: {dT}</p>
      <p>eT: {eT}</p>
      <p>fT: {fT}</p>
      <p>gT: {gT}</p>
      <p>hT: {hT}</p>
    </div>
  );
}

export default DataBox;
