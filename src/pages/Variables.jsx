import { useEffect, useState } from "react";
import { fetchVariables } from "../components/Api/fetchData";

import { Loader } from "../components/Loader/Loader";
import VariablesList from "../components/VariablesList/VariablesList";
import { Header } from "./pages.styled";
const keyLocalStorage ="variables";

const Variables = () => {
  const [variables, setVariables] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVariables = async () => {
      try {
        setIsLoading(true);
        const data = await fetchVariables();
       
        //debugger;

        setVariables(data);
        //console.log(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getVariables();
  }, []);

  useEffect(() => {     
    localStorage.setItem(keyLocalStorage, JSON.stringify(variables));    
  }, [variables]);

  return (
    <main>
      <Header>All possible variables</Header>

      {isLoading && <Loader />}

      {variables.length > 0 && <VariablesList vars={variables} />}
    </main>
  );
};

export default Variables;
