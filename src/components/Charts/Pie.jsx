import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DoughnutChart = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  return (
    <div className="w-full p-4 rounded-lg bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Sales Breakdown</h2>

      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            dataKey="y"
            nameKey="x"
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="70%"
            fill="#8884d8"
            paddingAngle={3}
            label={({ x, y, name }) => `${name}: ${y}`}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          {legendVisiblity && <Legend />}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoughnutChart;
