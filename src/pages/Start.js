import React from "react";

const Start = ({setDisplay}) => {
  return (
    <div className="flex flex-col gap-5 font-alfa items-center h-full justify-center">
      <div className="font-aclonica text-blue text-[120px]">
        QUIZ APP
      </div>
      <div
        onClick={() => setDisplay("question")}
        className="bg-navy cursor-pointer border-blue border-[6px] text-[48px] px-5 text-blue rounded-xl hover:scale-110 hover:text-white hover:border-white"
      >
        START
      </div>
      <div className="text-blue text-[24px] text-center">
        It's not what you know, it's what you do consistently
      </div>
    </div>
  );
};

export default Start;
