import React from "react";
import Home from "../pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import '../styles/globalStyles.scss'

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;