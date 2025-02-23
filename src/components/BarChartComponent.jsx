import React from 'react';
    import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    const BarChartComponent = ({ data, dataKey, fill, title }) => {
      return (
        <div>
          <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="episode" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={dataKey} fill={fill} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    };

    export default BarChartComponent;
