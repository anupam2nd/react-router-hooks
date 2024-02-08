import { createContext, useContext } from "react";

const DashboardContext = createContext();

export function useUserContext() {
  const user = useContext(DashboardContext);

  if (user == undefined) {
    throw new Error("Use Dashboard Context provider");
  }

  return user;
}

export default DashboardContext;
