import React from "react";
import Counter from "./Counter";
import Conter from "./Conter";
import { useSelector } from "react-redux";
import foodlist2 from "./foodlist2";
import Product2 from "./Product2";
import ControlledCarousel from "./ControlledCarousel";

function Homede({ MainMeals }) {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <div className="mom">
        <div className="text">
          <h1 className="bokor-regular">
            A Place Where Passion for Cooking Meets Endless Inspiration
          </h1>
          <div style={{ background: "black", width: "100%", height: 1 }}></div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 50 }}>
              <Counter />
              <p>Users</p>
            </div>
            <div>
              <Conter />
              <p>Recipes</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src="../50337a274b4fcc96703efeda1e3d76f6-removebg-preview.png" />
        </div>
      </div>
      <div ref={MainMeals} className="secde">
        <div className="foode">
          <img src="https://foodu-react.vercel.app/assets/img/shape/17.png" />
          <h1
            className="bokor-regular"
            style={{ textAlign: "center", fontSize: 30, margin: 0 }}
          >
            Your Meal Journey Starts Here
          </h1>
          <img src="https://foodu-react.vercel.app/assets/img/shape/18.png" />
        </div>
        <div>
          <div className="foods">
            {foodlist2.map((el,index) => (
              <Product2 key={el.id} product={el} index={index} />
            ))}
          </div>
        </div>
      </div>
      {/* sec1 */}

      {/* sec2 */}
      <div style={{ backgroundColor: "#1d2024", height: 500 }}>
        <ControlledCarousel />
      </div>
      {/* sec3 */}
      <div
        className="texte4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          marginBottom: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#dfddd9", width: 2, height: 190 }}></div>
          <div
            style={{
              background: "#1d2024",
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: "10px solid #ffffff",
              position: "relative",
              zIndex: 100,
            }}
          ></div>
          <div data-aos="fade-up" className="carde">
            <img src="image.png" />
            <h4>Tried & Tested Recipes</h4>
            <p>
              Discover tried-and-tested recipes that suit all tastes and
              occasions.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#dfddd9", width: 2, height: 127 }}></div>
          <div
            style={{
              background: "#1d2024",
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: "10px solid #ffffff",
              position: "relative",
              zIndex: 100,
            }}
          ></div>
          <div data-aos="fade-down" className="cardee">
            <p>
              We use fresh and natural ingredients to ensure the best flavor and
              quality
            </p>
            <h4>Fresh Ingredients</h4>
            <img src="image copy.png" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#dfddd9", width: 2, height: 190 }}></div>
          <div
            style={{
              background: "#1d2024",
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: "10px solid #ffffff",
              position: "relative",
              zIndex: 100,
            }}
          ></div>
          <div data-aos="fade-up" className="carde">
            <img src="image copy 2.png" />
            <h4>Quick & Easy Recipes</h4>
            <p>
              Prepare delicious meals in minutes with our simple and guaranteed
              recipes
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#dfddd9", width: 2, height: 127 }}></div>
          <div
            style={{
              background: "#1d2024",
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: "10px solid #ffffff",
              position: "relative",
              zIndex: 100,
            }}
          ></div>
          <div className="cardee" data-aos="fade-down">
            <p>
              Enjoy the most delicious traditional dishes with a creative touch
              that makes them even more special.
            </p>
            <h4>Classic Flavors, Modern Touch</h4>
            <img src="image copy 3.png" />
          </div>
        </div>
      </div>
      {/* sec4 */}
      <div style={{ padding: "0px 77px" }}>
        <div className="foode">
          <img src="https://foodu-react.vercel.app/assets/img/shape/17.png" />
          <h4 style={{ color: "red" }}>News & Blog</h4>
          <img src="https://foodu-react.vercel.app/assets/img/shape/18.png" />
        </div>
        <h1 style={{ textAlign: "center", marginBottom: 50 }}>
          Our Latest News & Blog
        </h1>
        <div style={{ display: "flex", justifyContent: "space-around",marginBottom:200 }}>
          <div className="news">
            <img src="https://foodu-react.vercel.app/assets/img/blog/1.jpg" />
          </div>
          <div className="news">
            <img src="https://foodu-react.vercel.app/assets/img/blog/2.jpg" />
          </div>
          <div className="news">
            <img src="https://foodu-react.vercel.app/assets/img/blog/3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homede;
