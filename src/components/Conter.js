import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

const Conter = () => {
  const ConterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // عندما يظهر العنصر نبدأ العد
            const options = { duration: 2 }; // تعديل المدة حسب المطلوب (هنا 5 ثوانٍ)
            const demo = new CountUp(ConterRef.current, 250, options);
            if (!demo.error) {
              demo.start();
            } else {
              console.error(demo.error);
            }
          } else {
            // عند اختفاء العنصر، نقوم بإعادة ضبط القيمة ليكون جاهزًا لإعادة العد
            ConterRef.current.innerText = '0';
          }
        });
      },
      { threshold: 0.5 } // يبدأ العد عندما يظهر 50% من العنصر (يمكنك تعديل النسبة)
    );

    if (ConterRef.current) {
      observer.observe(ConterRef.current);
    }

    // تنظيف الـ observer عند انتهاء المكون
    return () => {
      if (ConterRef.current) {
        observer.unobserve(ConterRef.current);
      }
    };
  }, []);

  return (
    <div style={{color:"red" , display:"flex" ,alignItems:"center"}}>
      <div className='bokor-regular' ref={ConterRef} id="myTargetElement" style={{ fontSize: '50px' }}>
        0
      </div>
      <h1 className='bokor-regular' style={{color:"red",fontSize:50,marginTop:11}}>+</h1>
    </div>
  );
};

export default Conter;
