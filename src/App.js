import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Cards from "./components/Cards";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Cards></Cards>}></Route>
        <Route
          path="/carddetails"
          element={<CardDetails></CardDetails>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
