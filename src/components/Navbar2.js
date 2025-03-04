    import React, { useEffect, useState } from "react";
    import "./Sidebarr.css";
    import { Link, useLocation, useNavigate } from "react-router-dom";
    import { useDispatch, useSelector } from "react-redux";
    import "./Navbar2.css";
    import { logout } from "../JS/userSlice/userSlice";

    function Navbar2({ recipesRef, MainMeals, count }) {
    const [isOpen, setIsOpen] = useState(false);
    const user = useSelector((state) => state.user.user);
    const location = useLocation(); // تحديد الصفحة الحالية
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
        className={`navbar ${
            location.pathname === "/" ? "home-padding" : "no-padding"
        }`}
        style={{
            width: "100%",
            zIndex: 1,
        }}
        >
        <div
            className={`navbar ${
            location.pathname === "/" ? "homenav" : "no-padding"
            }`}
            style={{
            height: 94,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            }}
        >
            <div style={{ marginRight: 300 }}>
            <Link to={"/"}>
                <a>
                <img
                    style={{ width: 120 }}
                    src="/WhatsApp_Image_2025-02-21_at_6.56.53_PM-removebg-preview.png"
                />
                </a>
            </Link>
            </div>
            <div className="foody">
            <Link to={"/"}>
                <a>
                <img src="/WhatsApp_Image_2025-02-21_at_6.56.08_PM-removebg-preview.png" />
                </a>
            </Link>
            </div>
            <div>
            {user ? (
                <div div style={{ position: "absolute", right: 10, top: 28 }}>
                <button
                    onClick={() => navigate("/profil/favorites")}
                    style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    }}
                >
                    🤍
                </button>
                <span
                    type="text"
                    placeholder={count}
                    style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                    width: 20,
                    marginLeft: 5,
                    color:"#757566"
                    }}
                >{count}</span>
                </div>
            ) : null}
            {!user && (
                <a href="/login">
                {" "}
                <button
                    style={{ marginLeft: 360 }}
                    className="button-18"
                    role="button"
                >
                    Login
                </button>
                </a>
            )}
            {/* ✅ زر فتح النافذة */}
            {user ? (
                <button
                style={{ background: "none", border: "none", marginLeft: 360 }}
                onClick={toggleSidebar}
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`size-6 ${
                    location.pathname === "/" ? "" : "no-padding"
                    }`}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                </button>
            ) : null}
            {/* ✅ النافذة الجانبية */}
            <div className={`sidebarr ${isOpen ? "show" : ""}`}>
                <button className="close-btn" onClick={toggleSidebar}>
                &times;
                </button>
                <div
                className="visitedd"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: 300,
                    marginTop: 100,
                }}
                >
                <Link to={"profil/info"}>
                <div style={{display:"flex",justifyContent:"center",marginBottom:10}}>
                    
                    <img
                    style={{ width: 40 }}
                    src={
                        user?.img ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnBLMyaL-5gh0nhP-vircgmtkHER58KHoMAw&s"
                    }
                    />
                    <h1 style={{fontSize:16,margin:10,color:"black"}}>
                    {user?.name} {user?.lastname}
                    </h1>
                </div>
                </Link>
                <div className="visitedd">
                    {user ? (
                    <Link
                        to="/add"
                        onClick={(e) => {
                        window.scrollTo(0, 100);
                        }}
                    >
                        add recipe
                    </Link>
                    ) : null}
                </div>

                <div className="visitedd">
                    <Link
                    to="/"
                    onClick={(e) => {
                        // أولًا نقوم بتوجيه المستخدم إلى الصفحة الرئيسية
                        setTimeout(() => {
                        // بعد التأكد من التنقل، نمر إلى العنصر باستخدام scrollIntoView
                        recipesRef.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                        }, 100);
                    }}
                    >
                    Our recipes
                    </Link>
                </div>
                <Link
                    to="/"
                    onClick={(e) => {
                    // أولًا نقوم بتوجيه المستخدم إلى الصفحة الرئيسية
                    setTimeout(() => {
                        // بعد التأكد من التنقل، نمر إلى العنصر باستخدام scrollIntoView
                        MainMeals.current?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                    }}
                >
                    Main Meals
                </Link>
                <Link
                    to={"profil"}
                    onClick={(e) => {
                    window.scrollTo(0, 0);
                    }}
                >
                    Profil Settings
                </Link>
                <a
                    href=""
                    className="logoutt"
                    onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                    }}
                >
                    Logout
                </a>
                </div>
            </div>

            {/* ✅ خلفية سوداء عند فتح النافذة */}
            {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
            </div>
        </div>
        </div>
    );
    }

    export default Navbar2;
