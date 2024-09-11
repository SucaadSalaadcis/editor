import React, { useState } from 'react'; // Import React and useState hook
import ReactQuill from 'react-quill'; // Import React-Quill
import 'react-quill/dist/quill.snow.css'; // Import Quill's snow theme CSS

const App = () => {
  const [value, setValue] = useState(''); // State to hold editor content

  const handleChange = (content) => {
    setValue(content); // Update state with new content
    console.log('Editor content changed:', content); // Log the changed content
    // Editor content changed: <h2><u>suu</u></h2>
  };

  return (
    <div>
      <h2>React Quill Editor (JavaScript only)</h2>
      <ReactQuill 
        theme="snow" // Use the 'snow' theme for styling
        value={value} // Set the editor's value
        onChange={handleChange} // Handle content changes
        placeholder="Type your text here..." // Set placeholder text
        modules={{
          toolbar: [ // Configure toolbar options
            [{ 'header': [1, 2,3,4, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
          ],
        }}
      />
    </div>
  );
};

export default App; // Export the TextEditor component as default
