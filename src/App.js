import React from "react";
import Main from './page/Main';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Main/>
     {/* <BrowserRouter>
      <Header />
      <Routes>
         <Route path="/" element={<Content/>} />
         <Route path="/signup" element={<Signup/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="/new" element={<New/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
