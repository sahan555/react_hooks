import { useCallback, useState } from "react";

const UseCallBack = () => {
  const [number, setNumber] = useState("");
  const [dark, setDark] = useState(false);

  //usememo only run/render when number is change,useful
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>change color</button>
      <div style={themeStyle}>
        {getItems().map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default UseCallBack;
