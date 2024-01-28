import crop from "../assets/cropruse.png";

export default function Home() {
  return (
    <div
      className="image-container"
      style={{ backgroundColor: "#2c3e50", position: "relative" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={crop}
          className="logo"
          alt="ruse reveal"
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            textAlign: "center",
            opacity: 0.5, // Set the opacity to make the image translucent
          }}
        />
      </div>
      <div
        className="content"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <center>
          <h1>RUSE REVEAL</h1>
        </center>
      </div>
    </div>
  );
}
