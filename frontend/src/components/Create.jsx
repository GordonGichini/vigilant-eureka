import React, { useState } from 'react';
import ParticleBg from './ParticleBg';
import Button from './Button';

const CreatePortfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    profileImage: null,
    cv: null,
    music: null,
    links: { linkedin: '', github: '', twitter: '' },
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('links.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        links: { ...prev.links, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.profileImage) newErrors.profileImage = 'Profile image is required';
    if (!formData.cv) newErrors.cv = 'CV is required';
    if (!formData.music) newErrors.music = 'Music file is required';
    if (!formData.links.linkedin.trim()) newErrors.linkedin = 'LinkedIn URL is required';
    if (!formData.links.github.trim()) newErrors.github = 'GitHub URL is required';
    if (!formData.links.twitter.trim()) newErrors.twitter = 'X URL is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'links') {
        formDataToSend.append(key, JSON.stringify(value));
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataToSend,
      });
      if (!response.ok) {
        throw new Error('Error submitting the form');
      }
      alert('Portfolio generated successfully!');
    } catch (error) {
      alert(`Failed to submit form: ${error.message}`);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <ParticleBg />
      <div className="max-w-3xl w-full bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-lg shadow-xl z-10">
        <h1 className="text-3xl font-kaushan text-center text-primary mb-6">Create Your Portfolio</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Name', name: 'name', type: 'text', placeholder: 'Your Name' },
            { label: 'Title', name: 'title', type: 'text', placeholder: 'Your Title (e.g Frontend Developer)' },
            { label: 'Upload Image', name: 'profileImage', type: 'file', accept: 'image/*' },
            { label: 'Upload CV', name: 'cv', type: 'file', accept: '.pdf' },
            { label: 'Upload Music', name: 'music', type: 'file', accept: 'audio/*' },
            { label: 'LinkedIn URL', name: 'links.linkedin', type: 'url', placeholder: 'LinkedIn Profile URL' },
            { label: 'GitHub URL', name: 'links.github', type: 'url', placeholder: 'GitHub Profile URL' },
            { label: 'X URL', name: 'links.twitter', type: 'url', placeholder: 'X Profile URL' },
          ].map(({ label, name, ...rest }) => (
            <div key={name} className="space-y-1">
              <label htmlFor={name} className="block text-sm font-kaushan text-gray-700">
                {label}
              </label>
              <input
                id={name}
                name={name}
                {...rest}
                onChange={name.startsWith('links.') || name === 'profileImage' || name === 'cv' || name === 'music' ? 
                  handleFileChange : 
                  handleInputChange
                }
                className={`border p-2 rounded w-full ${errors[name] ? 'border-red-500' : ''}`}
              />
              {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
            </div>
          ))}
          <div className="flex justify-center">
            <Button href="/portfolio/:id" type="submit">
              Generate Portfolio
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePortfolio;
