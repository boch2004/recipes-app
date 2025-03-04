import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletefavoris } from "../../JS/userSlice/favorisslice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Favorites({ ping, setping, count, setcount }) {
    const favoris = useSelector((state) => state.favoris.favorislist);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    // حساب عدد الوصفات المفضلة
    useEffect(() => {
        if (user) {
            const userFavorites = favoris.filter((el) => el.iduser === user._id).length;
            setcount(userFavorites);
        }
    }, [favoris, user]);

    const handleClick = (e, el) => {
        if (!user) {
            e.preventDefault();
            Swal.fire({
                icon: "warning",
                title: "You must log in first",
                text: "Something went wrong!",
            });
        } else {
            window.scrollTo(0, 0);
        }
    };

    const handleDelete = (elId, e) => {
        e.stopPropagation(); // Prevent the link from being followed
        dispatch(deletefavoris(elId));
        setping(!ping);
        setcount(count - 1);
    };

    return (
        <div className="favorites-container ">
            {favoris
                ?.filter((el) => el.iduser === user?._id)
                .map((el) => (
                    <div className="favorite-item" key={el._id}
                style={{
                    transition: "all 0.5s ease-in-out",
                    transform: "translateY(0px)",
                    }}
                    onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-12px)";
                    e.currentTarget.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow = "none";
                    }}
                    >
                        <Link
                            to={user ? `/product/${el.idurl}` : "#"}
                            onClick={(e) => handleClick(e, el)}
                        >
                            <img
                                src={el?.imgproduct}
                                className="favorite-image"
                                alt={el?.nameproduct}
                            />
                        </Link>
                        <h5 className="favorite-title">{el?.nameproduct}</h5>
                        <div className="favorite-buttons">
                            <button
                                onClick={(e) => handleDelete(el?._id, e)}
                                className="delete-button"
                            >
                                🤍
                            </button>
                            <Link
                                to={user ? `/product/${el.idurl}` : "#"}
                                onClick={(e) => handleClick(e, el)}
                            >
                                <button className="show-more-button">Show more</button>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Favorites;
