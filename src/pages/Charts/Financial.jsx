import React from "react";
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Line } from "recharts";
import { ChartsHeader } from "../../components";
import { financialChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const FinancialChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Financial" title="AAPL Historical" />
      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={financialChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="low" fill="#8884d8" />
            <Line type="monotone" dataKey="high" stroke="#82ca9d" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinancialChart;
