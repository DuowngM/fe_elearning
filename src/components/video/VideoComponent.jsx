import React from "react";

export default function VideoComponent({ sourceVideo }) {
  return (
    <>
      {" "}
      <iframe
        width="100%"
        height="100%"
        src={sourceVideo}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{border: 0}}
      ></iframe>
    </>
  );
}
