import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screens/Home";
import Search from "./screens/Search";
import MapScreen from "./screens/Map";
import Details from "./screens/Details";
import Emergency from "./screens/Emergency";
import Confirmation from "./screens/Confirmation";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/details" element={<Details />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}