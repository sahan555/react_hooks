import { useRef } from "react"

const UseRef = () => {
// const inputEl = document.getElementById("mytext");
// const handleForm = ()=>{
//   console.log(inputEl.value);
// }
const inputRef =useRef(null);
const handleForm = () =>{
  const value = inputRef.current.value;
  inputRef.current.style.color = "blue";
  console.log(value);
}

  return (
    <div>
      <input ref={inputRef} type="text" name="" id="mytext" />
      <button onClick={handleForm}>Submit</button>
    </div>
  )
}

export default UseRef
