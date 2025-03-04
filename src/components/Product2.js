import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { setCategory } from "../JS/userSlice/categorySlice";

  function Product2({ product, index }) {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="1000" // مدة التأثير
        data-aos-delay={index * 200} // تأخير زمني لكل منتج
        style={{
          width: 333,
          height: 500,
          backgroundColor: "#E8CBA4",
          margin: 20,
          borderRadius: "40px",
        }}
      >
        <Link
          to={"Ourmenu"}
          onClick={(e) => {
            if (!user) {
              e.preventDefault();
              Swal.fire({
                icon: "warning",
                title: "You must log in first",
                text: "Something went wrong!",
              });
            } else {
              window.scrollTo(0, 0);
              dispatch(setCategory(product?.category));
            }
          }}
        >
          <div className="food-card">
            <img src={product?.img} alt={product?.titel} />
            <div className="food-sec">
              <h4 className="food-title">{product?.titel}</h4>
              <p className="food-desc">{product?.description}</p>
              <button className="food-button">See more</button>
            </div>
          </div>
        </Link>
      </div>
    );
  }
  

export default Product2;
