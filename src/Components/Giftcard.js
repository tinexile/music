import React from "react";
import card from "../images/gift_card.png";
const Giftcard = () => {
  return (
    <>
      <div>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center gap-10 my-10 " >
          <img src={card} alt="" />
          <div className="w-1/2 flex flex-col gap-6" >
            <h1 className="font-bold " >Gift Card</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              commodo gravida neque, id euismod tellus pellentesque eu. Ut non
              tempus quam, varius posuere leo. Proin nec tellus non velit
              pharetra accumsan et eget ante. Nunc dui massa, auctor vel libero
              id, commodo condimentum metus. Integer volutpat consequat lectus,
              vel volutpat mi. Curabitur rhoncus sagittis libero sagittis
              dictum. Aliquaa magna.
              <h3 className="mt-4" >Already have an Orange MyTunes Music Gift Card?</h3>
              <div class="border-b border-grey-400 "></div>
              <button className="mt-8 bg-violet-800 px-6 font-bold py-2 rounded-md text-white" >Redeem</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Giftcard;
