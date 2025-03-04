import React from "react";
import { Link } from "react-router-dom";

function Ourmenucarde({ product }) {
  return (
    <div>
      <Link
        to={`/product/${product._id}`}
        onClick={(e) => {
          window.scrollTo(0, 0);
        }}
      >
        <div
          style={{
            width: 411,
            height: 580,
            padding: 50,
            backgroundColor: "#2b2b2b",
            borderRadius: "40px",
            marginBottom: 50,
          }}
        >
          <img
            style={{
              width: 300,
              height: 200,
              borderRadius: 20,
              marginBottom: 50,
            }}
            src={product?.img}
          />
          <h4>{product?.titel} </h4>
          <p>{product?.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default Ourmenucarde;
