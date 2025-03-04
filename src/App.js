import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { getusers, userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import Home from "./components/Home";
import { getproduct } from "./JS/userSlice/productSlice";
import Addresipt from "./components/Addresipt";
import Ingredients from "./components/Ingredients";
import Ourmenu from "./components/Ourmenu";
import Footer from "./components/Footer";
import Info from "./components/profil/Info";
import ProfileSection from "./components/profil/ProfileSection";
import Navbar2 from "./components/Navbar2";
import { getfavoris } from "./JS/userSlice/favorisslice";
import "flowbite";
import Favorites from "./components/profil/Favorites";
import Myrecipes from "./components/profil/Myrecipes";
import "aos/dist/aos.css"; // استيراد CSS الخاص بالمكتبة
import Aos from "aos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200, // مدة التأثير
      once: true,     // التأثير مرة واحدة فقط
    });
  }, []);
  const favoris = useSelector((state) => state.favoris.favorislist);
  const user = useSelector((state) => state.user.user);

  const [ping,setping] = useState(false)
useEffect(() => {
  dispatch(userCurrent());
  dispatch(getproduct());
  dispatch(getusers());
dispatch(getfavoris());
}, [ping])



  const recipesRef = useRef(null); 
  const MainMeals = useRef(null); 

  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [count, setcount] = useState(
    user ? favoris.filter((el) => el.iduser === user._id).length : 0
  );
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (user) {
      setcount(favoris.filter((el) => el.iduser === user._id).length);
    }
  }, [favoris, user]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="App">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Navbar2 MainMeals={MainMeals} recipesRef={recipesRef} count={count} />
      <div>
        {showButton && (
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              zIndex:99999999,
              bottom: "20px",
              right: "20px",
              backgroundColor: "#ff6347",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              fontSize: "20px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            ↑
          </button>
        )}
      </div>
      <Routes>
        <Route exact path="/" element={<Home MainMeals={MainMeals} recipesRef={recipesRef} />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil/" element={<Profil />}>
            <Route path="info" element={<Info />} />
            <Route path="" element={<ProfileSection />} />
            <Route path="favorites" element={<Favorites ping={ping} setping={setping} count={count} setcount={setcount}   />} />
            <Route path="Myrecipes" element={<Myrecipes ping={ping} setping={setping} />} />
          </Route>
        </Route>
        <Route path="/add" element={<Addresipt />} />
        <Route path="/product/:id" element={<Ingredients ping={ping} setping={setping} count={count} setcount={setcount}/>} />
        <Route path="/Ourmenu" element={<Ourmenu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
