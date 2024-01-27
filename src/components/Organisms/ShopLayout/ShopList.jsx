import React from "react";

const lists = ["食", "菓", "麺", "乾", "詰"];

export const ShopList = () => {
  return (
    <>
      <p>商品一覧表</p>

      <wrapper className="grid grid-cols-2">
        {lists.map((list) => {
          return (
            <a href="#">
              <span
                className="block 
    bg-slate-200 
    text-2xl 
    w-84 
    h-14 
    m-4 
    rounded-md"
              >
                {list}
              </span>
            </a>
          );
        })}
      </wrapper>
    </>
  );
};
