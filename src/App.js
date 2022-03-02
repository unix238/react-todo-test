import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { AppRouter } from "./Components/AppRouter";

import "./Style/App.css";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log(data);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
