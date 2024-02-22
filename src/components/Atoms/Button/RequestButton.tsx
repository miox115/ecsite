import { FC } from "react";

type Props = {
  Children: React.ReactNode;
};

export const RequestButton: FC<Props> = (props) => {
  return (
    <div className="m-1">
      <button
        className="bg-blue-500
                           hover:bg-blue-700
                           text-white
                           font-bold
                           py-2
                           px-4
                           rounded"
      >
        {props.Children}
      </button>
    </div>
  );
};
