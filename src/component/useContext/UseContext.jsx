import { createContext, useState } from "react";
import A from "./a";

const appState = createContext();
const UseContext = () => {
  const [data, setData] = useState("context data ho hai ta");
  return (
    <appState.Provider value={data}>
      <div>
        <A />
      </div>
    </appState.Provider>
  );
};

export default UseContext;
export {appState}
