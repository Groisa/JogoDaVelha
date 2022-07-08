import { Route, Routes } from "react-router-dom";
import { HomeView } from "./Views/HomeView";
import { OffView } from "./Views/OffView";


function App() {
  return (
    <Routes>
      <Route path="/offline" element={<OffView/>}/>
      <Route path="/" element={<HomeView/>}/>
    </Routes>
  );
}

export default App;
