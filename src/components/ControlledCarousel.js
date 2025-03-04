import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // استيراد الـ CSS

const testimonials = [
  {
    id: 1,
    title: "Best Homemade Pasta",
    text: "I tried the homemade pasta recipe from Foody, and it turned out amazing! The instructions were clear, and the result was delicious.",
    image: "https://via.placeholder.com/80",
    name: "Sarah M.",
    rating: "★★★★★"
  },
  {
    id: 2,
    title: "Delicious Cakes",
    text: "Foody’s cake recipes are the best! I made a chocolate cake, and my family loved it.",
    image: "https://via.placeholder.com/80",
    name: "James P.",
    rating: "★★★★☆"
  },
  {
    id: 3,
    title: "Healthy and Easy",
    text: "Loved the healthy salad recipes. Quick, easy, and super tasty!",
    image: "https://via.placeholder.com/80",
    name: "Emily R.",
    rating: "★★★★★"
  }
];

const TestimonialCarousel = () => {
  return (
    <div style={{height:450,}} className="w-full max-w-2xl mx-auto">
      <Carousel 
        showArrows={true} 
        autoPlay={true} 
        infiniteLoop={true} 
        interval={3000} 
        showThumbs={false} 
        showStatus={false}
      >
        {testimonials.map((testimonial) => (
          <div style={{display:"flex",justifyContent:"center"}}>
          <div style={{height:450,width:854,display:"flex",flexDirection:"column",justifyContent:"center"}} key={testimonial.id} className="p-6 bg-white shadow-lg rounded-lg text-center">
            <div style={{ color: "#eab308", fontSize:30 }}>{testimonial.rating}</div>
            <h4 style={{ fontSize:30, fontWeight: "600", marginTop: "0.5rem" }}>{testimonial.title}</h4>
            <p style={{ color: "#cccccc", marginTop: "0.5rem", fontStyle: "italic",fontSize:30 }}>"{testimonial.text}"</p>
            {/* <img src={testimonial.image} className="w-16 h-16 rounded-full mx-auto mt-4" alt={testimonial.name} /> */}
            <h6 style={{fontSize:15, marginTop: "0.5rem", fontWeight: "600" }}>{testimonial.name}</h6>
          </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
