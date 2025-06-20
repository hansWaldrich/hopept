import { useState } from 'react';

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) setLoggedIn(true);
  };

  return loggedIn ? (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Painel do Administrador</h1>
      <p>Bem-vindo! Aqui você poderá gerenciar os dados da landing page.</p>
    </div>
  ) : (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login do Administrador</h1>
      <input type="text" placeholder="Usuário" className="border p-2 w-full mb-2"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input type="password" placeholder="Senha" className="border p-2 w-full mb-2"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Entrar</button>
    </div>
  );
}
