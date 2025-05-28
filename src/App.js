import "antd/dist/antd.variable.min.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import NotFoundPage from "./pages/ErrorPages/NotFoundPage";
import Spinner from "./utils/Spinner";
import LandingPage from "./pages/LandingPage";
import TitleDetails from "./pages/TitleDetails";
import AddTitle from "./pages/AddTitle";

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
          <Route path="/title/details/:id" element={<TitleDetails />} />
          <Route path="/add-new-title" element={<AddTitle />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
