import React from "react";

export const NewsButton = (props) => {
  return (
    <div className="m-1">
      <button
        className="bg-amber-400 
                    shadow-amber-500/50 
                    text-black
                    text-sm 
                    rounded-full 
                    px-2 
                    py-1
                    rounded"
      >
        {props.title}
      </button>
    </div>
  );
};
