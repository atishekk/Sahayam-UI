import React, { useContext, useState } from 'react';

const SwitchContext = React.createContext();

export function useSwitch() {
  return useContext(SwitchContext);
}

export function SwitchProvider({ children }) {
  const [dark, setDark] = useState(true);

  const value = {
    dark,
    setDark
  };
  return <SwitchContext.Provider value={value}>{children}</SwitchContext.Provider>;
}
