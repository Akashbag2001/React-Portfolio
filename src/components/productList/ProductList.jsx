import "./productList.css";
import Product from "../product/Product";
import { Products } from "../../data";
import React from "react";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">PROJECTS</h1>
        <p className="pl-desc">
          I made several projects both in frontend and backend with some
          beautifull UI/UX designs. Check out my projects{" "}
        </p>
      </div>
      <div className="pl-list">
        {Products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
