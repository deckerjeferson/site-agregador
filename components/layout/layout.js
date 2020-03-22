import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./layout.module.css";

const Layout = props => {
  return (
    <>
      <Header/>
      <div className={styles.container}>
        {props.children}
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
