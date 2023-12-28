import{ useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState("");
  const [dark, setDark] = useState(false);

  //usememo only run/render when number is change,useful
  const  doubleNumber = useMemo(()=>{
    return slowFunction(number);
  },[number])
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div>
      <input type="text" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={()=>setDark(prev => !prev)}>change color</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};
function slowFunction(num) {
  console.log("slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default UseMemo;
