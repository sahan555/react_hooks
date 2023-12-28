import { useContext } from "react";
import { appState } from "./UseContext";

const C = () => {
  const appData = useContext(appState);
  return (
    <div>
      <h2>C</h2>
      <p>{appData}</p>
    </div>
  );
};

export default C;
