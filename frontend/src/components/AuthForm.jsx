import React, { useState } from 'react'
import ParticleBg from './ParticleBg';
import Button from './Button';

const AuthForm = ({ title, onSubmit }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required.';
        if (!formData.password) newErrors.password = 'Password is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        onSubmit(formData);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
            <ParticleBg />
          <div className="max-w-md w-full bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-xl">
            <h1 className="text-2xl font-kaushan text-center text-primary mb-6">{title}</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-kaushan text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-kaushan text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded font-bold hover:bg-primary-dark transition duration-300"
              >
                {title}
              </Button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default AuthForm