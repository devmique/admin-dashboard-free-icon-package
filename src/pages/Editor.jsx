import React, { useState } from 'react';
import ReactQuill from 'react-quill'; // ✅ Replacing Syncfusion Editor
import 'react-quill/dist/quill.snow.css';
import { Header } from '../components';

const Editor = () => {
  const [content, setContent] = useState('');

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        className="bg-white rounded-lg"
      />
    </div>
  );
};

export default Editor;

