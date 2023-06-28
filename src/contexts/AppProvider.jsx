import {useContext, createContext, useState} from "react";
import swr from "swr";

const AppContext = createContext({});

export default function AppProvider({children}) {
  const {data: heroes} = useSWR("/api/marvel/heroe");

  const [heroisTabela, setHeroisTabela] = useState(heroes);

  return <AppContext.Provider value={{heroisTabela}}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);
