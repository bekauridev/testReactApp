import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CarDetails from "./pages/CarDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Header />} />
        <Route path="/car" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
