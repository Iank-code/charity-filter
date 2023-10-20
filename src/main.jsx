import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Blog from "./pages/Blog.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./../dist/output.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" exact={true} element={<App />} />
        {/* Blog page */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
