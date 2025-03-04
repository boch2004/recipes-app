import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Product({ product }) {
        const user = useSelector((state) => state.user.user);
        return (
                <Link to={user ? `/product/${product._id}` : "#"} onClick={(e) => {
                        if (!user) {
                                e.preventDefault(); Swal.fire({
                                        icon: "warning",
                                        title: "You must log in first",
                                        text: "Something went wrong!",
                                });
                        } else {
                                window.scrollTo(0, 0); 
                                }
                        }
                }>
                        <div data-aos="fade-up"  className='' style={{ width: 411, height: 580, padding: 50, backgroundColor: "#2b2b2b", borderRadius: "40px" }}>
                                <img style={{ width: 300, height: 200, borderRadius: 20, marginBottom: 50 }} src={product?.img} />
                                <h4>{product?.titel} </h4>
                                <p>{product?.description}</p>
                        </div>
                </Link>
        );
}

export default Product