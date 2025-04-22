import "./App.css";
import { Outlet } from "react-router-dom";
import redeee from "../assets/rede.png";
function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
