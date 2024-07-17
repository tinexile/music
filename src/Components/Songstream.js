import React from "react";
import { FaMusic } from "react-icons/fa6";
import computer from '../images/ipad-iphone.png'
const Songstream = () => {
  return (
    <>
      <div className="w-full bg-violet-900 py-10 text-center ">

        <div className=" max-w-[1200px] mx-auto text-white px-6 text-center">

          <div className="flex justify-center items-center gap-2 text-center">
            <FaMusic className="inline" size={30} />
            <span className="font-bold text-2xl " >Music</span>
          </div>
 
          <p className="mt-6" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo gravida neque, id euismod tellus pellentesque eu. Ut non tempus quam, varius posuere leo. Proin nec tellus non velit pharetra accumsan et eget ante. Nunc dui massa, auctor vel libero id, commodo condimentum metus</p>
          <button className="text-center my-6 bg-orange-600 px-4 py-2 rounded-lg font-bold " >Start Your Trial Now</button>
             <img src={computer} alt="" className="text-center relative left-[50%] translate-x-[-50%]" />
        </div>
        
      </div>
    </>
  );
};

export default Songstream;
