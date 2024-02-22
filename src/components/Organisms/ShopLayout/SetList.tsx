import SetImg from "../../../img/img/set.jpg";

const Sets = [
  {
    id: 1,
    src: SetImg,
    alt: "Set1",
    name: "SetPart1",
  },
  {
    id: 2,
    src: SetImg,
    alt: "Set2",
    name: "SetPart2",
  },
  {
    id: 3,
    src: SetImg,
    alt: "Set3",
    name: "SetPart3",
  },
];

export const SetList = () => {
  return (
    <div className="bg-yellow-400">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          START SET
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
          {Sets.map((set) => (
            <div key={set.id} className="group relative bg-white">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={set.src}
                  alt={set.alt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="/Set">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {set.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
