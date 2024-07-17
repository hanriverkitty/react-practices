import React from "react";
import { Search_Bar } from "./assets/scss/Searchbar.scss";
function Searchbar(props) {
  return (
    <div class={Search_Bar}>
      <input type="text" placeholder="찾기" />
    </div>
  );
}

export default Searchbar;
