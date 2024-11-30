import React, { useState } from 'react';

const CreatePortfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    profileImage: null,
    cv: null,
    links: { linkedin: '', github: '', twitter: '' },
    skills: [],
    projects: [],
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    // Send to backend
    await fetch('/api/upload', { method: 'POST', body: formDataToSend });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-md rounded">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-2 rounded w-full"
      />
      <textarea
        name="about"
        placeholder="About You"
        onChange={(e) => setFormData({ ...formData, about: e.target.value })}
        className="border p-2 rounded w-full"
      />
      <input type="file" name="profileImage" onChange={handleFileChange} />
      <input type="file" name="cv" onChange={handleFileChange} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate Portfolio
      </button>
    </form>
  );
};

export default CreatePortfolio;
