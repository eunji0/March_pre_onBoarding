import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import TopHeader from "./component/TopHeader";
import PageA from "./page/PageA";
import PageB from "./page/PageB";
import PageC from "./page/PageC";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopHeader />
        <div style={{display: "flex", flexDirection:'row', width:'100%'}}>
        <Header />
        <Routes>
          <Route path="/pageA" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
          <Route path="/pageC" element={<PageC />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
