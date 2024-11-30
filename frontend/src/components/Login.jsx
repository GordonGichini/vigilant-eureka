import React from 'react'
import AuthForm from './AuthForm'

const Login = () => {
    const handleLogin = async (formData) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if(response.ok) {
                const { token } = await response.json(); // Get the JWT from the response
                localStorage.setItem('token', token); // Store the JWT in localStorage
                alert('Login successfully');
            } else {
                const error = await response.json();
                alert(error.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Something went wrong, Try Again');
        }
    }
  return (
    <AuthForm title="Login" onSubmit={handleLogin} />
  )
}

export default Login