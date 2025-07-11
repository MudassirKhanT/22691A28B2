import React from "react";
import ShortenForm from "../components/ShortenForm";

function HomePage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%)",
      }}
    >
      <ShortenForm />
    </div>
  );
}

export default HomePage;
