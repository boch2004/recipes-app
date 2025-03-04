import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

const Counter = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // عندما يظهر العنصر نبدأ العد
            const options = { duration: 2 }; // تعديل المدة حسب المطلوب (هنا 5 ثوانٍ)
            const demo = new CountUp(counterRef.current, 3, options);
            if (!demo.error) {
              demo.start();
            } else {
              console.error(demo.error);
            }
          } else {
            // عند اختفاء العنصر، نقوم بإعادة ضبط القيمة ليكون جاهزًا لإعادة العد
            counterRef.current.innerText = '0';
          }
        });
      },
      { threshold: 0.5 } // يبدأ العد عندما يظهر 50% من العنصر (يمكنك تعديل النسبة)
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // تنظيف الـ observer عند انتهاء المكون
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div style={{color:"red" , display:"flex" ,alignItems:"center"}}>
      <div className='bokor-regular' ref={counterRef} id="myTargetElement" style={{ fontSize: '50px' }}>
        0
      </div>
      <h1 className='bokor-regular' style={{color:"red",fontSize:50,marginTop:11}}>k</h1>
    </div>
  );
};

export default Counter;
