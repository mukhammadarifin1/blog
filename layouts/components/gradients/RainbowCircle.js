const RainbowCircle = () => {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 528 560"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: "blur(70px)",
          width: "30vw",
          height: "560px",
          display: "inline-block",
          lineHeight: "1em",
          flexShrink: "0",
          color: "currentcolor",
          verticalAlign: "middle",
          zIndex: "-1",
          fill: "none",
          position: "absolute",
          top: "calc((0.5rem-10) * -1)",
          center: "calc((2.5rem-10) * -1)",
        }}
      >
        <circle cx="71" cy="61" r="111" fill="#F56565"></circle>
        <circle cx="244" cy="106" r="139" fill="#ED64A6"></circle>
        <circle cy="291" r="139" fill="#ED64A6"></circle>
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936"></circle>
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B"></circle>
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78"></circle>
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1"></circle>
      </svg>
    </div>
  );
};
export default RainbowCircle