
export const Picky = () => {
  return (
    <div>
      <h2 className="text-sm text-amber-300 py-2">
        味だけでなく健康面でも充実
      </h2>
      <h1 className="text-2xl border-b-4 border-yellow-500 pb-2">素材</h1>
      <div className="flex text-center p-4">
        <div className="w-1/3 p-4">
          <h1>小麦は国産を使用</h1>
          <picture>
            <img src="https://dummyimage.com/250x/250/fff" alt="goods" />
          </picture>
          <p>「小麦」へのこだわりとして、北海道産の小麦を使用しています。</p>
        </div>
        <div className="w-1/3 p-4">
          <h1>水は富士山の雪解け水を使用</h1>
          <picture>
            <img src="https://dummyimage.com/250x/250/fff" alt="goods" />
          </picture>
          <p>
            「水」へのこだわりとし、富士山のふもとから汲んだ水を使用しており、ミネラル分の豊富に含まれています。
          </p>
        </div>
        <div className="w-1/3 p-4">
          <h1>その他の素材</h1>
          <picture>
            <img src="https://dummyimage.com/250x/250/fff" alt="goods" />
          </picture>
          <p>
            「素材」へのこだわりとして、すべての食材を国産を使用しています。
          </p>
        </div>
      </div>
    </div>
  );
};
