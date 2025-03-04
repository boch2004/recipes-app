import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addfavoris } from "../JS/userSlice/favorisslice";
import { toast } from "react-toastify";


function Ingredients({ ping, setping, count, setcount }) {
    const Products = useSelector((state) => state.product.productlist);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const { id } = useParams();

    // البحث عن المنتج بناءً على `id`
    const product = Products.find((p) => p._id === id);

    // تعريف `newfavoris` باستخدام `useState` خارج الجملة الشرطية
    const [newfavoris, setnewfavoris] = useState({
        iduser: user?._id,
        nameuser: user?.name + " " + user?.lastname,
        nameproduct: "",
        imgproduct: "",
        description: "",
        Ingredients: "",
        Directions: "",
        chef: "",
        idurl: product?._id || "",
    });

    // التأكد من أن المنتج موجود قبل الوصول إلى خصائصه
    useEffect(() => {
        if (product && user) {
            setnewfavoris({
                iduser: user._id,
                nameuser: `${user.name} ${user.lastname}`,
                nameproduct: product.titel,
                imgproduct: product.img,
                description: product.description,
                Ingredients: product.Ingredients,
                Directions: product.Directions,
                chef: "", // Assuming you can fetch the chef info if needed
                idurl: product?._id || "",
            });
        }
    }, [product, user]);

    if (!product) {
        return <p>Product not found</p>; // التعامل مع حالة عدم العثور على المنتج
    }

    // التعامل مع `Ingredients` و `Directions`
    const ingredientsList = String(product.Ingredients || "").split(";");
    const directionsList = String(product.Directions || "").split(";");
    const handleAddToFavorites = () => {
        dispatch(addfavoris(newfavoris));
        setping(!ping);
        setcount(count + 1);

        // إظهار إشعار نجاح
        toast.success("✅ Recipe added to favorites!", {
            position: "top-right",
            autoClose: 3000, // يغلق بعد 3 ثوانٍ
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    };

    return (
        <>
            <div
                className="lil"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "0px 250px",
                }}
            >
                <h1>{product.titel}</h1>
                <p>{product.description}</p>
                <h3>Ingredients:</h3>

                <div style={{display:"flex"}}>
                <ul>
                    {ingredientsList.map((ingredient, index) => (
                        <li key={index}>{ingredient.trim()}</li>
                    ))}
                </ul>
                <img src={product.img} alt={product.titel} />
                </div>

                <h3>Directions:</h3>
                <ol>
                    {directionsList.map((step, index) => (
                        <li key={index}>{step.trim()}</li>
                    ))}
                </ol>
            </div>

            {user && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                       onClick={handleAddToFavorites}
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "none",
                        }}
                    >
                        🤍 Add to Favorites
                    </button>
                </div>
            )}
        </>
    );
}

export default Ingredients;
