import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import UseReducer from "./component/UseReducer";
import UseRef from "./component/UseRef";
import Home from "./component/Home";
import UseMemo from "./component/useMemo";
import UseCallBack from "./component/UseCallBack";
import UseContext from "./component/useContext/UseContext";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Router>
        <Ul>
          <li>
            <Link to="/usereducer">useReducer</Link>
          </li>
          <li>
            <Link to="/useref">useRef</Link>
          </li>
          <li>
            <Link to="/usememo">useMemo</Link>
          </li>
          <li>
            <Link to="/usecallback">useCallBack</Link>
          </li>
          <li>
            <Link to="/usecontext">useContext</Link>
          </li>
        </Ul>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usereducer" element={<UseReducer />} />
            <Route path="/useref" element={<UseRef />} />
            <Route path="/usememo" element={<UseMemo />} />
            <Route path="/usecallback" element={<UseCallBack />} />
            <Route path="/usecontext" element={<UseContext />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;
`;
