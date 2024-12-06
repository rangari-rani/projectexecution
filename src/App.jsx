import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Projects from "./pages/Projects";
import { FilterProvider } from "./FilterContext/FilterContext";
import Footer from "./components/Footer";
import KanbanBoard from "./components/KanbanBoard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Auth from "./components/Auth";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <div style={styles.appContainer}>
      <FilterProvider>
        <Navbar />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/workflow" element={<KanbanBoard />} />
            <Route path="/project/*" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </FilterProvider>
    </div>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "157vh", // Full page height
    boxSizing: "border-box", // Avoid layout shifts
  },
  content: {
    flex: "1", // Pushes the footer down
  },
};


export default App;
