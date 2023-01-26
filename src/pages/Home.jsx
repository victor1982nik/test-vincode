import { useEffect, useState } from "react";
import { fetchQuery } from "../components/Api/fetchData";
import Form from "../components/Form/Form";
import { Loader } from "../components/Loader/Loader";
import CodesList from "../components/CodesList/CodesList";
import CodesDescription from "../components/CodeDescription/CodeDescription";


const Home = () => {
  const [codes, setCodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (query === null || query === "") return;
    const localstArr = JSON.parse(window.localStorage.getItem("codes"));

    if (localstArr) {
      const found = localstArr.find((item) => item.VIN === query);
      if (found) return;
    }

    const getCodesByQuery = async () => {
      try {
        setIsLoading(true);
        const response = await fetchQuery(query);
        
        if (!localstArr) {
          window.localStorage.setItem(
            "codes",
            JSON.stringify(response.Results)
          );
        } else {
          if (localstArr.length > 4) {
            localstArr.splice(0, 1);
          }
          localstArr.push(response.Results[0]);
          window.localStorage.setItem("codes", JSON.stringify(localstArr));
        }
        setCodes(response.Results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCodesByQuery();
  }, [query]);

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    const queryStr = e.target.elements.query.value;
    if (queryStr === "") {
      return;
    }
    setQuery(queryStr);
    e.target.elements.query.value = "";
  };

  const requestInCache = JSON.parse(window.localStorage.getItem("codes"));

  const findEl = () => {
    if (requestInCache) {
      return requestInCache[requestInCache?.length - 1];
    }
    return null;
  };
  const el = findEl();
  console.log(codes);

  return (
    <main>
      
      <Form onSubmit={handlerFormSubmit} />
      {isLoading && <Loader />}

      {requestInCache && <CodesList requestInCache={requestInCache} />}
      {el && <CodesDescription code={el} />}
    </main>
  );
};

export default Home;


