
export const Food = () => {
  const products = [
    {
      id: 1,
      name: "Food",
      href: "#",
      imageSrc: "https://dummyimage.com/400x500/000/fff",
      imageAlt: "食事",
      price: "￥２５０",
      taste: "プレーン",
    },
    {
      id: 2,
      name: "Food",
      href: "#",
      imageSrc: "https://dummyimage.com/400x500/000/fff",
      imageAlt: "食事",
      price: "￥２５０",
      taste: "バター",
    },
    {
      id: 3,
      name: "Food",
      href: "#",
      imageSrc: "https://dummyimage.com/400x500/000/fff",
      imageAlt: "食事",
      price: "￥２５０",
      taste: "ソルト",
    },
  ];

  return (
    <div>
      <div className="bg-white">
        <div className="m-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            食
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-slate-200">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.taste}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
