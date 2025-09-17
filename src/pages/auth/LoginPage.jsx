// src/pages/auth/LoginPage.jsx

import React, { useState, useEffect } from 'react';
import SygisLogo from '@/assets/react.svg';
import GoogleLogo from '@/assets/react.svg';
import { login } from '@/api/service/authService';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        localStorage.removeItem('token'); // Elimina cualquier sesión previa
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password) {
            setError('Por favor ingrese usuario y contraseña.');
            return;
        }

        try {
            const data = await login({ username, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify({
                username: data.username,
                rol: data.rol,
                modulos: data.modulos, // opcional, si lo necesitas luego
            }));
            window.location.href = '/home';
        } catch (err) {
            setError('Login failed, try again later.');
            console.error('Login error:', err.response?.data || err.message);
            setPassword(''); // Limpiar el campo de contraseña
            setUsername(''); // Limpiar el campo de usuario
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-t from-slate-500 to-slate-800">
            <div className="bg-transparent border border-slate-500 rounded-lg shadow-lg p-12 w-full max-w-lg">
                <div className="text-center mb-8">
                    <img
                        src={SygisLogo}
                        alt="SIGIS Logo"
                        className="w-[100px] h-auto mx-auto rounded-xl shadow-md transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    />
                    <span className="mt-4 text-2xl font-bold text-white">SYGIS</span>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label htmlFor="username" className="block text-white text-base font-semibold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="shadow appearance-none border rounded w-full py-3 px-4 bg-transparent text-white text-base placeholder-gray-300 focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-white text-base font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="shadow appearance-none border rounded w-full py-3 px-4 bg-transparent text-white text-base placeholder-gray-300 focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-900 text-white font-bold w-full py-3 text-base rounded focus:outline-none focus:shadow-outline cursor-pointer"
                    >
                        Login
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-400" />
                        <span className="mx-3 text-base text-gray-100">or continue with</span>
                        <hr className="flex-grow border-gray-400" />
                    </div>

                    <button
                        onClick={() => window.location.href = '/accounts/register-user'}
                        className="relative w-full bg-white text-gray-700 py-3 rounded flex items-center justify-center shadow-sm hover:shadow-md transition cursor-pointer">
                        <span className="absolute left-4">
                            <img src={GoogleLogo} alt="Google Logo" className="w-6 h-6" />
                        </span>
                        <span className="text-base font-medium">Google</span>
                    </button>

                    <p className="text-sm text-gray-300 mt-8 text-center">
                        Terms of Service and{" "}
                        <a href="#" className="text-white underline font-medium">
                            Privacy Policy
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;