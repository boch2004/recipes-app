import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img
          style={{ borderRadius: "50%", width: 36, margin: "30px 0 30px 0px" }}
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Dropdown Icon"
        />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="/profil">Profil</a>
          <a
            className="logoutt"
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
