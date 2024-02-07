import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

export const Sns = () => {
  const sns = [
    {
      id: 1,
      tweetId: "933354946111705097",
    },
    {
      id: 2,
      tweetId: "933354946111705097",
    },
    {
      id: 3,
      tweetId: "933354946111705097",
    },
    {
      id: 4,
      tweetId: "933354946111705097",
    },
    {
      id: 5,
      tweetId: "933354946111705097",
    },
    {
      id: 6,
      tweetId: "933354946111705097",
    },
    {
      id: 7,
      tweetId: "933354946111705097",
    },
  ];

  return (
    <>
      <div>
        <h1>Sns</h1>
      </div>

      <div className="grid grid-cols-4">
        {sns.map((sns) => (
          <div key={sns.id} className="m-2">
            <TwitterTweetEmbed tweetId={sns.tweetId} />
          </div>
        ))}
      </div>
    </>
  );
};
