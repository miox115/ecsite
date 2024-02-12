import { FaPlateWheat } from "react-icons/fa6";
import { GiWrappedSweet } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { LuCookie } from "react-icons/lu";
import { CiBag1 } from "react-icons/ci";

const lists = [
  {
    id: 1,
    name: "食",
    icon: <FaPlateWheat />,
  },
  {
    id: 2,
    name: "菓",
    icon: <GiWrappedSweet />,
  },
  {
    id: 3,
    name: "麺",
    icon: <GiNoodles />,
  },
  {
    id: 4,
    name: "乾",
    icon: <LuCookie />,
  },
  {
    id: 5,
    name: "詰",
    icon: <CiBag1 />,
  },
];

export const ShopList = () => {
  return (
    <>
      <p>商品一覧表</p>

      <wrapper className="grid grid-cols-2">
        {lists.map((list) => {
          return (
            <a href="#">
              <span className="flex bg-slate-200 text-2xl w-84 h-8 m-2 rounded-md">
                {list.icon}
                {list.name}
              </span>
            </a>
          );
        })}
      </wrapper>
    </>
  );
};
