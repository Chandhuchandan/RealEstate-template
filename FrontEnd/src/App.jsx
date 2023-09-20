import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddNew from "./Pages/AddNew";
import Properties from "./Pages/Properties";
import ShowDetails from "./Pages/ShowDetails";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/addNew" element={<AddNew />}></Route>
      <Route path="/properties" element={<Properties />}></Route>
      <Route path="/showDetails/:id" element={<ShowDetails />} />
    </Routes>
  );
};

export default App;
