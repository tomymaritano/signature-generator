import React, { useState, useRef } from 'react';
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

  const signatureRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prevState => ({
        ...prevState,
        imageUrl: reader.result
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCopy = () => {
    if (signatureRef.current) {
      const range = document.createRange();
      range.selectNode(signatureRef.current);
      window.getSelection().removeAllRanges(); 
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      alert('Signature copied to clipboard!');
    }
  };

  return (
    <div className="App">
      <div className="hero">
        <img src="/image.png" alt="Hero" className="hero-image" />
      </div>
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
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </form>
      <div className="signature-preview" ref={signatureRef}>
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
      <button onClick={handleCopy}>Copy Signature</button>
      <div className="signature-container">
        <code>
          {`<div style="font-family: Arial, sans-serif; color: #333;">
  ${formData.imageUrl ? `<img src="${formData.imageUrl}" alt="${formData.name}" style="width: 100px; height: auto; border-radius: 50%; margin-right: 20px;">` : ''}
  <p><strong>${formData.name}</strong><br>
  <span style="color: #b38f00;">${formData.title}</span><br>
  <a href="mailto:${formData.email}">${formData.email}</a><br>
  ${formData.phone}<br>
  <a href="${formData.linkedin}">LinkedIn</a></p>
</div>`}
        </code>
      </div>
    </div>
  );
}

export default App;
