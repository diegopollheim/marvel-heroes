import { useContext, createContext, useState, useEffect } from "react";
import useSWR from "swr";

const AppContext = createContext({});

export default function AppProvider({ children }) {
  const [allHerois, setAllHerois] = useState([]);
  const [heroisTabela, setHeroisTabela] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/marvel/heroe");
      const dados = await response.json();
      setAllHerois(dados);
      setHeroisTabela(dados);
    };

    return fetchData;
  }, []);

  const searchHeroe = (query) => {
    if (!query) {
      setHeroisTabela(allHerois);
      return;
    }

    const newList = allHerois.filter((hr) =>
      hr.name.toLowerCase().includes(query.toLowerCase())
    );

    setHeroisTabela(newList);
  };

  return (
    <AppContext.Provider value={{ heroisTabela, searchHeroe }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
