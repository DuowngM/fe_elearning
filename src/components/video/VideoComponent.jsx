import React from "react";

export default function VideoComponent({ sourceVideo }) {
  return (
    <div className="w-full h-full md:h-96">
      {" "}
      <iframe
        width="100%"
        src={sourceVideo}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ border: 0 }}
        className="xl:h-[610px] md:h-full"
      ></iframe>
    </div>
  );
}
