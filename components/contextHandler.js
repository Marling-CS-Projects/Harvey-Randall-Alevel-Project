import { createContext, useContext } from 'react';
import { io } from "socket.io-client";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = io()

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}