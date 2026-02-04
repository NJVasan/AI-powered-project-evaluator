import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  console.log("DASHBOARD LOADED");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          width: "420px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>AI Project Evaluator</h1>
        <p style={{ color: "#666", marginBottom: "30px" }}>
          Smart AI-based project assessment
        </p>

        <div
          onClick={() => navigate("/new")}
          style={cardStyle("#4CAF50")}
        >
          ➕ New Submission
        </div>

        <div
          onClick={() => navigate("/view")}
          style={cardStyle("#2196F3")}
        >
          📂 View Submissions
        </div>
      </div>
    </div>
  );
}

const cardStyle = (bg) => ({
  background: bg,
  color: "#fff",
  padding: "18px",
  borderRadius: "10px",
  marginBottom: "20px",
  cursor: "pointer",
  fontSize: "18px",
});

export default Dashboard;
