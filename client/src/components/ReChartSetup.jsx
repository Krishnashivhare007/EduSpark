import {
  Bar,
  BarChart,
  Cell,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ReCharSetup({ charts }) {
  if (!charts || charts.length === 0) return null;
  const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

  return (
    <div className="space-y-8">
      {charts.map((chart, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl p-4 bg-white"
        >
          <h4 className="font-semibold text-gray-800 mb-3">📊 {chart.title}</h4>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              {chart.type === "bar" && (
                <BarChart dataKey={chart.data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {chart.data.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              )}
              {chart.type === "line" && (
                <LineChart dataKey={chart.data}></LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReCharSetup;
