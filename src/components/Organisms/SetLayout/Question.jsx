import React from "react";

export const Question = () => {
  return (
    <div>
      <h2 className="text-sm text-amber-300 py-2">Q & A</h2>
      <h1 className="text-2xl border-b-4 border-yellow-500 pb-2">質問</h1>

      <div className="pt-4">
        <dl className="border-y-2 border-black">
          <dd>効率的な食べ方は？</dd>
          <dt className="flex hover:inline-flex">
            食と一緒に食べることで一日分の栄養が取れます。
          </dt>
        </dl>
      </div>
    </div>
  );
};
