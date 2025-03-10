import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';

import { lineCustomSeries } from '../../data/dummy'; // Ensure this is in the correct format

const LineChartComponent = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="w-full h-96 bg-white dark:bg-gray-800 p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Sales Overview</h2>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={lineCustomSeries} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={currentMode === 'Dark' ? '#555' : '#ddd'} />
          <XAxis dataKey="month" stroke={currentMode === 'Dark' ? '#fff' : '#333'} />
          <YAxis stroke={currentMode === 'Dark' ? '#fff' : '#333'} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
