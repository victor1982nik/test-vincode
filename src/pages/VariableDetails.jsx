import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader/Loader";
import Variable from "../components/Variable/Variable";
import Error from "../components/Error/Error";
const keyLocalStorage = "variables";

const VariableDetails = () => {
  const [variable, setVariable] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const vars = JSON.parse(localStorage.getItem(keyLocalStorage));
    const [item] = vars.filter((i) => String(i.ID) === id);
    if (!item) {
      SetError(true);
      setIsLoading(false);
    } else {
      setVariable(item);
      setIsLoading(false);
    }
  }, [id]);

  return (
    <main>
      {isLoading && <Loader />}
      {error && <Error text={"Nothing found, Wrong id perhaps"} />}
      {variable && !error && <Variable vars={variable} />}
    </main>
  );
};

export default VariableDetails;
