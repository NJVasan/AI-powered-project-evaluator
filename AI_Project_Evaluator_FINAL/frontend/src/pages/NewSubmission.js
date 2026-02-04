import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewSubmission() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    college: "",
    dept: "",
    year: "",
    problem: null,
    code: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("EVALUATE BUTTON CLICKED");
    console.log(formData);

    if (!formData.problem || !formData.code) {
      alert("Please upload both problem statement and code ZIP");
      return;
    }

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) =>
        data.append(key, formData[key])
      );

      const response = await fetch("http://localhost:5000/evaluate", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorText = await res.text();
        alert("Evaluation failed: " + errorText);

        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Evaluation_Report.pdf";
      a.click();

      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      console.error(err);
      alert("Backend not reachable");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #43cea2, #185a9d)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "35px",
          width: "480px",
          borderRadius: "14px",
          boxShadow: "0px 12px 35px rgba(0,0,0,0.25)",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            background: "transparent",
            border: "none",
            color: "#185a9d",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          ⬅ Back to Dashboard
        </button>

        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          New Project Submission
        </h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} required style={inputStyle} />
          <input name="college" placeholder="College" onChange={handleChange} required style={inputStyle} />
          <input name="dept" placeholder="Department" onChange={handleChange} required style={inputStyle} />
          <input name="year" placeholder="Year" onChange={handleChange} required style={inputStyle} />

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Problem Statement</label>
            <input
              type="file"
              name="problem"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
              onChange={handleFileChange}
              required
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ marginBottom: "26px" }}>
            <label style={labelStyle}>Code ZIP</label>
            <input
              type="file"
              name="code"
              accept=".zip"
              onChange={handleFileChange}
              required
              style={{ width: "100%" }}
            />
          </div>

          <button type="submit" style={submitBtn}>
            🚀 Evaluate Project
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "14px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontWeight: "bold",
};

const submitBtn = {
  width: "100%",
  padding: "14px",
  background: "#43cea2",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  cursor: "pointer",
};

export default NewSubmission;
