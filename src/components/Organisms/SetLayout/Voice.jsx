import axios from "axios";
import { PagiNation } from "../../Atoms/PagiNation/PagiNation";
import { useEffect, useState } from "react";

export const Voice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
          const slicedData = res.data.slice(0, 10);
          // とりあえず１０個表示
          setData(slicedData);
        })
        .catch((err) => {
          console.error(`${err}です。`);
        });
    };
    fetch();
  }, []);

  return (
    <div className="pt-10">
       <h2 className="text-sm text-amber-300 py-2">口コミ</h2>
      <h1 className="text-2xl border-b-4 border-yellow-500 pb-2">いろんな意見をいただいています。</h1>

      {data.map((datas) => {
        return (
          <div key={datas.id} className="p-2">
            <h1 className="p-2">サブタイトル{datas.id}個</h1>
            <h2 className="p-2">コメント一覧{datas.title}です。</h2>
            <p className="p-2">内容{datas.body}です。</p>
          </div>
        );
      })}
      <PagiNation />
    </div>
  );
};
