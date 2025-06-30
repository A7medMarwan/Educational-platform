import React, { useEffect, useState } from "react";
import MyNavbar from "./Components/Navbar/Navbar";
import Splash from "./Components/Splash/Splash";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Math151 from "./Pages/Math151";
import Math152 from "./Pages/Math152";
import Math253 from "./Pages/Math253";
import Math261 from "./Pages/Math261";
import Math262 from "./Pages/Math262";
import Math263 from "./Pages/Math263";
import Math352 from "./Pages/Math352";
import Math362 from "./Pages/Math362";
import Math363 from "./Pages/Math363";
import Math364 from "./Pages/Math364";
import Math365 from "./Pages/Math365";
import Math366 from "./Pages/Math366";
import MainLayout from "./Layouts/MainLayout";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="math151" element={<Math151 />} />
            <Route path="math152" element={<Math152 />} />
            <Route path="math253" element={<Math253 />} />
            <Route path="math261" element={<Math261 />} />
            <Route path="math262" element={<Math262 />} />
            <Route path="math263" element={<Math263 />} />
            <Route path="math352" element={<Math352 />} />
            <Route path="math362" element={<Math362 />} />
            <Route path="math363" element={<Math363 />} />
            <Route path="math364" element={<Math364 />} />
            <Route path="math365" element={<Math365 />} />
            <Route path="math366" element={<Math366 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
