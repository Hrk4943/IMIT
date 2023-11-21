import React from "react";

function Background() {
  const circleStyle1 = {
    background: "radial-gradient(circle, #12C2E9, transparent)",
    width: "510px",
    height: "510px",
    position: "absolute",
    top: "512px",
    left: "-255px",
    opacity: "56%",
    borderRadius: "50%",
    filter: "blur(50px)",
    pointerEvents: "none",
  };

  const circleStyle2 = {
    background: "radial-gradient(circle, #C471ED, transparent)",
    width: "510px",
    height: "510px",
    position: "absolute",
    top: "-255px",
    left: "465px",
    opacity: "56%",
    borderRadius: "50%",
    filter: "blur(50px)",
    pointerEvents: "none",
  };

  const circleStyle3 = {
    background: "radial-gradient(circle, #F64F59, transparent)",
    width: "510px",
    height: "510px",
    position: "absolute",
    top: "281px",
    left: "1000px",
    opacity: "56%",
    borderRadius: "50%",
    filter: "blur(50px)",
    overflow: "hidden",
    pointerEvents: "none",
  };
  return (
    <>
      <div style={circleStyle1}></div>
      <div style={circleStyle2}></div>
      <div style={circleStyle3}></div>
    </>
  );
}

export default Background;
