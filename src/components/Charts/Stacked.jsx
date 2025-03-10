import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height, data }) => {
  const { currentMode } = useStateContext();

  return (
    <div className="w-full p-4 bg-white dark:bg-gray-800 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Sales Breakdown</h2>

      <ResponsiveContainer width={width} height={height}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" stroke={currentMode === 'Dark' ? '#fff' : '#333'} />
          <YAxis stroke={currentMode === 'Dark' ? '#fff' : '#333'} />
          <Tooltip />
          <Legend />
          <Bar dataKey="productA" stackId="a" fill="#8884d8" />
          <Bar dataKey="productB" stackId="a" fill="#82ca9d" />
          <Bar dataKey="productC" stackId="a" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stacked;
