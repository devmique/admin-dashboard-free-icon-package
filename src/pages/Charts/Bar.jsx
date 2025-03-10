import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ChartsHeader } from "../../components";
import { barCustomSeries } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const BarChartComponent = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={barCustomSeries[0].data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="x" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="y" fill="#8884d8" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartComponent;
