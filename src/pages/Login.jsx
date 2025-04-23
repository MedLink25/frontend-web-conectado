import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const encoded = btoa(`${username}:${password}`);
    localStorage.setItem('auth', encoded);
    navigate('/dashboard');
  };

  return (
    <div className="max-w-sm mx-auto p-6 mt-20 border shadow rounded-xl space-y-4">
      <h2 className="text-2xl font-semibold text-center">Acceso Médico</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Entrar
      </button>
    </div>
  );
}
