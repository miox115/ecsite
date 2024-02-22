import { FC } from "react";

type Props = {
  onClick: any;
};

export const LoginButton: FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <div className="m-1">
      <button
        className="bg-orange-400
                    hover:bg-orange-600
                    text-white
                    font-bold
                    rounded-full 
                    py-2
                    px-4"
        onClick={onClick}
      >
        Button
      </button>
    </div>
  );
};
