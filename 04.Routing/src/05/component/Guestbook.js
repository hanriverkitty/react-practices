import React from "react";
import * as styles from "../assets/scss/component/Guestbook.scss";
import Header from "../layout/Header";
import Footer from "../layout//Footer";
import Navigation from "../layout/Navigation";
export default function Gallery() {
  return (
    <>
      <Header />
      <div className={styles.Guestbook}>
        <h2>Guestbook</h2>
      </div>
      <Navigation />
      <Footer />
    </>
  );
}
