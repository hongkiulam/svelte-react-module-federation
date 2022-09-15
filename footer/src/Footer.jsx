import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
  return <footer>footer</footer>;
};

export default Footer;

export const mount = (el) => ReactDOM.render(<Footer />, el);
