import SetImg from "../../../img/img/set.jpg";

const Sets = [
  {
    id: 1,
    src: SetImg,
    alt: "Setport1",
    name: "SetPart1",
  },
  {
    id: 2,
    src: SetImg,
    alt: "Setport2",
    name: "SetPart2",
  },
  {
    id: 3,
    src: SetImg,
    alt: "Setport3",
    name: "SetPart3",
  },
];

export const SetList = () => {
  return (
    <div className="flex justify-center">
      {Sets.map((Part) => {
        return (
          <>
            <div class="p-4 text-center">
              <img src={Part.src} alt={Part.alt} />
              <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                {Part.name}
              </h2>
            </div>
          </>
        );
      })}
    </div>
  );
};
