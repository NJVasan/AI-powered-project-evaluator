import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import NewSubmission from "./pages/NewSubmission";
import ViewSubmissions from "./pages/ViewSubmissions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<NewSubmission />} />
        <Route path="/view" element={<ViewSubmissions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
