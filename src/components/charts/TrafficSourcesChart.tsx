
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Organic Search", value: 42, color: "#1976d2" },
  { name: "Direct", value: 28, color: "#388e3c" },
  { name: "Social Media", value: 15, color: "#f57c00" },
  { name: "Email Marketing", value: 8, color: "#7b1fa2" },
  { name: "Paid Ads", value: 5, color: "#d32f2f" },
  { name: "Referrals", value: 2, color: "#616161" },
];

const TrafficSourcesChart = () => {
  const renderCustomLabel = (entry: any) => {
    return `${entry.value}%`;
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              fontSize: '14px',
            }}
            formatter={(value: number) => [`${value}%`, 'Traffic Share']}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            iconType="circle"
            wrapperStyle={{ paddingTop: '20px', fontSize: '14px', fontFamily: 'Roboto, sans-serif' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficSourcesChart;
