import { useEffect, useState } from "react";
import socket from "../socket/socket";
import Charts from "../components/Charts";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("vitals_update", (newData) => {
      // add timestamp if missing
      if (!newData.timestamp) {
        newData.timestamp = new Date().toLocaleTimeString();
      }

      setData((prev) => [newData, ...prev].slice(0, 20));
    });

    return () => socket.off("vitals_update");
  }, []);

  return (
    <div>
      <h2>Patient Dashboard</h2>

      {/* Charts */}
      <Charts data={data} />

      {/* Patient Data */}
      {data.map((d, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
          }}
        >
          <p>ID: {d.patient_id}</p>
          <p>HR: {d.heart_rate}</p>
          <p>O2: {d.oxygen_level}</p>
          <p>Temp: {d.temperature}</p>

          <p>
            Status:
            <span
              style={{
                color:
                  d.status === "CRITICAL"
                    ? "red"
                    : d.status === "WARNING"
                    ? "orange"
                    : "green",
                marginLeft: "5px",
              }}
            >
              {d.status}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}