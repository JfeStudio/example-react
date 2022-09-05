import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Feature from "./pages/feature/Feature";
import Content from "./pages/content/Content";
import NotFound from "./pages/notFound/NotFound";
import Main from "./pages/main/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Teams from "./pages/teams/Teams";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="feature" element={<Feature />} />
        <Route path="content" element={<Content />} />
        <Route path="main" element={<Main />} />
        <Route path="teams" element={<Teams />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
