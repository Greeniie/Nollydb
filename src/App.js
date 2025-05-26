import "antd/dist/antd.variable.min.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import NotFoundPage from "./pages/ErrorPages/NotFoundPage";
import Spinner from "./utils/Spinner";
import LandingPage from "./pages/LandingPage";

const Loading = () => {
  return (
    <div>
      <Spinner />
    </div>
  );
};

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
