import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "header/Header";
import Footer from "footer/Footer";

import "./index.css";

const App = () => {
  return (
    <>
      <div ref={(el) => new Header({ target: el })}></div>
      <div className="container">
        <div>Name: consumer</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Empty CSS</div>
      </div>
      <Footer />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
