import React from "react";
import FileUpload from "../Components/FileUpload/FileUpload";

export default function Math263() {
  return (
    <div style={{ background: "var(--secondary)", paddingBlock: "20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
        <h1 style={{ textAlign: "center", color: "#0d2c1f", marginBottom: "2rem", fontSize: "2rem", fontWeight: 700 }}>
          تحميل الملفات
        </h1>
        <FileUpload />
      </div>
    </div>
  );
}
