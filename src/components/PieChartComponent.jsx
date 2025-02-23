import React from 'react';
    import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    const PieChartComponent = ({ data, dataKey, nameKey, COLORS, title }) => {
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

      return (
        <div>
          <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h4>
          <ResponsiveContainer width="100%" height={200} className="mt-2 mb-4">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey={nameKey}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {
                  data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))
                }
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    };

    export default PieChartComponent;
