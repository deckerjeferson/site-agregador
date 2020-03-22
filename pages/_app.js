import React from "react";
import "../styles/reset.css";
import "../styles/app.css";

const App = ({Component, pageProps}) => {
  return <Component {...pageProps} />
};

export default App;
