
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const data = [
  { week: "Week 1", newUsers: 1200, returningUsers: 2800 },
  { week: "Week 2", newUsers: 1500, returningUsers: 3200 },
  { week: "Week 3", newUsers: 1100, returningUsers: 2900 },
  { week: "Week 4", newUsers: 1800, returningUsers: 3500 },
  { week: "Week 5", newUsers: 1600, returningUsers: 3100 },
  { week: "Week 6", newUsers: 2100, returningUsers: 3800 },
  { week: "Week 7", newUsers: 1900, returningUsers: 3600 },
  { week: "Week 8", newUsers: 2300, returningUsers: 4100 },
  { week: "Week 9", newUsers: 2000, returningUsers: 3900 },
  { week: "Week 10", newUsers: 2500, returningUsers: 4300 },
  { week: "Week 11", newUsers: 2200, returningUsers: 4000 },
  { week: "Week 12", newUsers: 2700, returningUsers: 4500 },
];

const UserAnalyticsChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="week" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#616161', fontFamily: 'Roboto, sans-serif' }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#616161', fontFamily: 'Roboto, sans-serif' }}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              fontSize: '14px',
              fontFamily: 'Roboto, sans-serif',
            }}
            formatter={(value: number, name: string) => [
              value.toLocaleString(),
              name === 'newUsers' ? 'New Users' : 'Returning Users'
            ]}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px', fontSize: '14px', fontFamily: 'Roboto, sans-serif' }}
            iconType="circle"
          />
          <Bar 
            dataKey="newUsers" 
            fill="#1976d2" 
            radius={[4, 4, 0, 0]}
            name="newUsers"
          />
          <Bar 
            dataKey="returningUsers" 
            fill="#00acc1" 
            radius={[4, 4, 0, 0]}
            name="returningUsers"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserAnalyticsChart;
