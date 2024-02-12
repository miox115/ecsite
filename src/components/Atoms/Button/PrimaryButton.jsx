
export const PrimaryButton = (props) => {
  const { onClick } = props;
  return (
    <div className="m-1 py-8">
      <button
        className="bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    rounded-full 
                    py-2
                    px-4
                    rounded"
        onClick={onClick}
      >
        Button
      </button>
    </div>
  );
};
