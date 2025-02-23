import React from 'react';
    import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    const AreaChartComponent = ({ data, dataKey, stroke, fill, title }) => {
      return (
        <div>
          <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h4>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="episode" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey={dataKey} stroke={stroke} fill={fill} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );
    };

    export default AreaChartComponent;
