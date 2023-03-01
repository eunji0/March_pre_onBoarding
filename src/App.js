import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import PageA from "./page/PageA";
import PageB from "./page/PageB";
import PageC from "./page/PageC";

function App() {
  return (
    <div className="App">
      메ㅔ
     <Main/>
     <BrowserRouter>
      {/* <Header /> */}
      <Routes>
         <Route path="/pageA" element={<PageA/>} />
         {/* <Route path="/pageB" element={<PageB/>} />
         <Route path="/pageC" element={<PageC/>} /> */}
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
