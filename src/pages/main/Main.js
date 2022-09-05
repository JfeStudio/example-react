import React from "react";
import { Link } from "react-router-dom";
import Article from "../../components/article/Article";
import Gallery from "../../components/Gallery";
// import Article from "../../components/Article";

export default function Main() {
  return (
    <div>
      <Gallery />
      <Link to="/">kembali</Link>
    </div>
  );
}
