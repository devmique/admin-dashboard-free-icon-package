import React from "react";
import { ResponsiveContainer, Treemap } from "recharts";
import { ChartsHeader } from "../../components";
import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const PyramidChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <Treemap
            data={PyramidData}
            dataKey="y"
            nameKey="x"
            stroke="#fff"
            fill={currentMode === "Dark" ? "#33373E" : "#8884d8"}
            aspectRatio={4 / 3}
          />
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PyramidChart;
