import React from "react";
import * as styles from "../assets/scss/component/About.scss";
import Header from "../layout/Header";
import Footer from "../layout//Footer";
import Navigation from "../layout/Navigation";
export default function About() {
  return (
    <>
      <Header />
      <div className={styles.About}>
        <h2>kickscar 입니다.</h2>
      </div>
      <Navigation />
      <Footer />
    </>
  );
}
