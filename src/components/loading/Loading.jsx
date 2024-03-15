import React from "react";
import { Spinner } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading">
      <Spinner type="ThreeDots" color="#000" size={20} />
    </div>
  );
};

export default Loading;
