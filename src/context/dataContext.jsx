import { createContext, useState } from "react";

const DataContext = createContext();

export const BioProvider = ({ children }) => {
  const [aT, aSetT] = useState(null);
  const [bT, bSetT] = useState(null);
  const [cT, cSetT] = useState(null);
  const [dT, dSetT] = useState(null);
  const [eT, eSetT] = useState(null);
  const [fT, fSetT] = useState(null);
  const [gT, gSetT] = useState(null);
  const [hT, hSetT] = useState(null);

  const value = {
    aT, aSetT,
    bT, bSetT,
    cT, cSetT,
    dT, dSetT,
    eT, eSetT,
    fT, fSetT,
    gT, gSetT,
    hT, hSetT,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
