
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const data = [
  { date: "Jan 1", conversionRate: 3.2, bounceRate: 65, avgSessionDuration: 145 },
  { date: "Jan 8", conversionRate: 3.5, bounceRate: 62, avgSessionDuration: 152 },
  { date: "Jan 15", conversionRate: 3.1, bounceRate: 68, avgSessionDuration: 138 },
  { date: "Jan 22", conversionRate: 3.8, bounceRate: 58, avgSessionDuration: 165 },
  { date: "Jan 29", conversionRate: 3.6, bounceRate: 61, avgSessionDuration: 158 },
  { date: "Feb 5", conversionRate: 4.1, bounceRate: 55, avgSessionDuration: 172 },
  { date: "Feb 12", conversionRate: 3.9, bounceRate: 59, avgSessionDuration: 168 },
  { date: "Feb 19", conversionRate: 4.3, bounceRate: 52, avgSessionDuration: 185 },
  { date: "Feb 26", conversionRate: 4.0, bounceRate: 57, avgSessionDuration: 175 },
  { date: "Mar 5", conversionRate: 4.5, bounceRate: 49, avgSessionDuration: 192 },
  { date: "Mar 12", conversionRate: 4.2, bounceRate: 54, avgSessionDuration: 188 },
  { date: "Mar 19", conversionRate: 4.7, bounceRate: 46, avgSessionDuration: 205 },
];

const PerformanceChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="date" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
          />
          <YAxis 
            yAxisId="left"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            domain={[0, 5]}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            domain={[40, 80]}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
            formatter={(value: number, name: string) => {
              if (name === 'conversionRate') return [`${value}%`, 'Conversion Rate'];
              if (name === 'bounceRate') return [`${value}%`, 'Bounce Rate'];
              if (name === 'avgSessionDuration') return [`${value}s`, 'Avg Session Duration'];
              return [value, name];
            }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="conversionRate" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
            name="conversionRate"
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="bounceRate" 
            stroke="#ef4444" 
            strokeWidth={3}
            dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#ef4444', strokeWidth: 2 }}
            name="bounceRate"
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="avgSessionDuration" 
            stroke="#8b5cf6" 
            strokeWidth={3}
            dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
            name="avgSessionDuration"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
