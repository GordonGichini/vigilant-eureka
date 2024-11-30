import React from 'react';
import AuthForm from './AuthForm';

const Register = () => {
    const handleRegister = async (formData) => {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Registration successful! Log In');
            } else {
                const error = await response.json();
                alert(error.message || 'Registration failed');
            }

        } catch (error) {
            console.error("Error registering:", error);
            alert('Something went wrong, Try again');
        }
    }
  return (
    <AuthForm title="Register" onSubmit={handleRegister} />
  )
}

export default Register