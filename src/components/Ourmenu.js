import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Ourmenucarde from './Ourmenucarde';
import { setCategory } from '../JS/userSlice/categorySlice';

function Ourmenu() {
    const Products = useSelector((state) => state.product.productlist);
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category.selectedCategory);
    const filteredProducts = category === "all"
        ? Products
        : Products.filter((product) => product.category === category);

    return (
        <div className='ourmenu'>
            <div className='mulish' style={{ width: "100%", display: "flex", justifyContent: "center", gap: "10px" }}>
                <button onClick={() => dispatch(setCategory("TUNISIAN"))}>Tunisian</button>
                <button onClick={() => dispatch(setCategory("Breakfast"))}>Breakfast</button>
                <button onClick={() => dispatch(setCategory("Lunch"))}>Lunch</button>
                <button onClick={() => dispatch(setCategory("Dinner"))}>Dinner</button>
                <button onClick={() => dispatch(setCategory("Desserts"))}>Desserts</button>
                <button onClick={() => dispatch(setCategory("INTERNATIONAL"))}>International</button>
                <button onClick={() => dispatch(setCategory("all"))}>All</button>
            </div>
            <div className='food'>
                <h1 style={{ marginBottom: 50 }}>Discover Our Menu</h1>
            </div>
            <div className='foods'>
                {/* product list */}
                {filteredProducts.length > 0
                    ? filteredProducts.map((product) => (
                        <Ourmenucarde key={product.id} product={product} />
                    ))
                    : <p style={{ backgroundImage: "url('https://foodu-react.vercel.app/assets/img/shape/11.jpg')", padding: "20px", textAlign: "center", color: "#fff", fontWeight: "bold" }}>
                        There are no products available in this category.
                    </p>
                }
            </div>
        </div>
    );
}

export default Ourmenu;
