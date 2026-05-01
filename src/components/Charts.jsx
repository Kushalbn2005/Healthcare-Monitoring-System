import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function Charts({ data }) {
  return (
    <div>
      <h3>Heart Rate</h3>
      <LineChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="heart_rate" stroke="#ff0000" />
      </LineChart>

      <h3>Oxygen Level</h3>
      <LineChart width={500} height={250} data={data}>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="oxygen_level" stroke="#0000ff" />
      </LineChart>

      <h3>Temperature</h3>
      <LineChart width={500} height={250} data={data}>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temperature" stroke="#ffa500" />
      </LineChart>
    </div>
  );
}