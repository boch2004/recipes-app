import React from 'react';

const LuxuryRestaurant = () => {
  return (
  <>
  <div style={{display:"flex",justifyContent:"end"}}>
    <div style={{ width:"410px",height:"600px",background:"#faf1df"}}></div>
    <div><img style={{ width:"410px",height:"600px"}} src='https://i.pinimg.com/736x/c5/d1/30/c5d130fe9feb5443635988839102d9b2.jpg'/></div>
    <div> <div style={{
        backgroundColor:"red",
        zIndex: "-1",
        width:"410px",
        height:"600px"
      }}>
        <img 
          src="https://foodu-react.vercel.app/assets/img/shape/8.png" 
          alt="decoration" 
          style={{ width: "410px", }} 
        />
      </div></div>

  </div>
  </>
  );
};

export default LuxuryRestaurant;