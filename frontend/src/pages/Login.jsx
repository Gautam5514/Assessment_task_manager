import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (data.token) {
            login(data.token);
            navigate('/dashboard');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
                <h1 className="text-xl font-bold">Login</h1>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-64" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2 w-64" />
                <button className="bg-blue-500 text-white p-2 rounded w-64">Login</button>
            </form>
        </div>
    );
}

export default Login;
