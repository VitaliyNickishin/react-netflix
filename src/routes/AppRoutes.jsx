import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layouts/Layout";
import { Home } from "../pages/Home";
import { MovieDetails } from "../components/MovieDetails";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};
