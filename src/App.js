import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageA from "./page/PageA";
import PageB from "./page/PageB";
import PageC from "./page/PageC";
import Layout from "./page/Layout";
import Login from "./page/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/pageA" element={<PageA />} />
            <Route path="/pageB" element={<PageB />} />
            <Route path="/pageC" element={<PageC />} />
          </Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
