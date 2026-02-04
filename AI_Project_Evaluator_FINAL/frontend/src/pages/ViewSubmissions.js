import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewSubmissions() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/submissions")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
        padding: "40px",
      }}
    >
      <button
        onClick={() => navigate("/")}
        style={{
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        ⬅ Back to Dashboard
      </button>

      <h2 style={{ textAlign: "center", color: "#fff", marginBottom: "30px" }}>
        Previous Submissions
      </h2>

      {data.length === 0 ? (
        <p style={{ textAlign: "center", color: "#fff", fontSize: "18px" }}>
          No submissions available yet.
        </p>
      ) : (
        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          <table width="100%" cellPadding="10">
            <thead style={{ background: "#2193b0", color: "#fff" }}>
              <tr>
                <th>ID</th>
                <th>Student</th>
                <th>Score</th>
                <th>Date</th>
                <th>Report</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id} style={{ textAlign: "center" }}>
                  <td>{item.id}</td>
                  <td>{item.student_name}</td>
                  <td>{item.score}</td>
                  <td>{item.date}</td>
                  <td>
                    <a
                      href={`http://localhost:5000/download/${item.id}`}
                      style={{
                        color: "#2193b0",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ViewSubmissions;
