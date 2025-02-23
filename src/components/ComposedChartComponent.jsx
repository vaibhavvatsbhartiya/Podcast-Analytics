import React from 'react';
    import { ComposedChart, Area, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    const ComposedChartComponent = ({ data, title }) => {
      return (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="episode" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="views" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="downloads" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="views" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      );
    };

    export default ComposedChartComponent;
