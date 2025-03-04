import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import foodlist from "./foodlist";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Food({recipesRef}) {
  const Products = useSelector((state) => state.product.productlist);
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div ref={recipesRef}  className="bground">
        <div className="food">
          <img src="https://foodu-react.vercel.app/assets/img/shape/17.png" />
          <h4  style={{ fontSize: 25 }}>
            Discover Our recipes
          </h4>
          <img src="https://foodu-react.vercel.app/assets/img/shape/18.png" />
        </div>

        <div className="foods">
          {foodlist.map((el) => (
            <Product product={el} />
          ))}
        </div>

        <div className="food " style={{ paddingBottom: 55 }}>
          <Link
            to={user ? `/Ourmenu` : "#"}
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                Swal.fire({
                  icon: "warning",
                  title: "You must log in first",
                  text: "Something went wrong!",
                });
              } else {
                window.scrollTo(0, 0); // ✅ تصفير التمرير عند التنقل
              }
            }}
          >
            <button className="button-17">show more</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Food;
