import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import RootLayout from "./layouts/RootLayout";
import ErrorLayout from "./layouts/Error";
import MainPersonal from "./pages/MainPersonal";
import MainWedding from "./pages/MainWedding";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={<RootLayout />}
          errorElement={<ErrorLayout />}
        />
        <Route index={true} element={<MainPersonal />} />
        <Route path="menikah" element={<MainWedding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
