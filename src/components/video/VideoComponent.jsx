import React from "react";

export default function VideoComponent({ sourceVideo }) {
  return (
    <>
      {" "}
      <iframe
        width="100%"
        height="500px"
        src={sourceVideo}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
}