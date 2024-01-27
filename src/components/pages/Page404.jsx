import React from "react";

export const Page404 = () => {
  return (
    <>
      <main
        className="grid
        min-h-full 
        place-items-center 
        bg-white 
        px-6 
        py-24 
        sm:py-32 
        lg:px-8"
      >
        <div className="text-center">
          <p
            className="text-base
                  font-semibold
                  text-indigo-600"
          >
            404
          </p>

          <h1
            className="mt-4
                text-3xl
                font-bold
                tracking-tight
                text-gray-900
                sm:text-5xl"
          >
            Page not found
          </h1>
        </div>
      </main>
    </>
  );
};
