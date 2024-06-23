import React, { useState } from 'react';
import FileReaderInput from 'react-file-reader';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    linkedin: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (event, results) => {
    const [e] = results;
    const { target: { result } } = e;
    setFormData(prevState => ({
      ...prevState,
      imageUrl: result
    }));
  };

  return (
    <div className="App">
      <h1>Signature Generator</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile URL"
          value={formData.linkedin}
          onChange={handleChange}
        />
        <FileReaderInput as="binary" id="file-input" onChange={handleFileChange}>
          <button type="button">Select Image</button>
        </FileReaderInput>
      </form>
      <div className="signature-preview">
        {formData.imageUrl && (
          <img
            src={formData.imageUrl}
            alt={formData.name}
            className="signature-image"
          />
        )}
        <div className="signature-details">
          <strong>{formData.name}</strong><br />
          <span>{formData.title}</span><br />
          <a href={`mailto:${formData.email}`}>{formData.email}</a><br />
          {formData.phone}<br />
          <a href={formData.linkedin}>LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default App;
