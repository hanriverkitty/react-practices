import React from "react";
import * as styles from "../assets/scss/component/Gallery.scss";
import Header from "../layout/Header";
import Footer from "../layout//Footer";
import Navigation from "../layout/Navigation";
export default function Gallery() {
  return (
    <>
      <Header />
      <div className={styles.Gallery}>
        <h2>Gallery</h2>
      </div>
      <Navigation />
      <Footer />
    </>
  );
}
