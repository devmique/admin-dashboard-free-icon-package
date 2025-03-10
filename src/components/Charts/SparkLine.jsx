import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <div className="w-full p-2">
      <ResponsiveContainer width={width} height={height}>
        <LineChart data={data}>
          <XAxis dataKey="x" hide />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="yval" stroke={currentColor} strokeWidth={2} dot={{ r: 2.5, fill: currentColor }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparkLine;
