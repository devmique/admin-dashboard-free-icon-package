import React, { useState } from 'react';
import { SketchPicker } from 'react-color'; // ✅ Replacing Syncfusion Color Picker
import { Header } from '../components';

const ColorPicker = () => {
  const [color, setColor] = useState("#008000"); // Default color

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" style={{ backgroundColor: color, height: "100px", borderRadius: "8px", margin: "20px auto" }} />
        
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <SketchPicker color={color} onChange={(updatedColor) => setColor(updatedColor.hex)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
