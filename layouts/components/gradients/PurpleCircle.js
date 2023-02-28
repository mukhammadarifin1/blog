const PurpleCircle = () => {
  return (
    <div
      style={{
        pointerEvents: "none",
        width: "2400px",
        height: "2400px",
        position: "absolute",
        top: "0%",
        left: "50%",
        webkitTransform: "translate(-50%, -50%)",
        mozTransform: "translate(-50%, -50%)",
        msTransform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
        backgroundImage:
          "radial-gradient(ellipse at center, hsl(289deg 78% 30% / 45%), transparent 60%)",
        zIndex: "-1",
      }}
    ></div>
  );
};
export default PurpleCircle;
