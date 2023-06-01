import React, { useState, FormEvent } from 'react';
import axios from 'axios'
import { userUrl } from '../../../apiLinks/apiLinks';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const SignInForm = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false)
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.post(`${userUrl}signIn`, { email, password })
            .then((response) => {
                if (response.data.logIn === 'success') {
                    localStorage.setItem('token', response.data.token)
                    Navigate('/home')
                }
                else if(response.data.logIn === 'noUser'){
                    toast.error('no user with this email please register')
                }else{
                    toast.error('incorrect password')
                }
            }).catch(() => toast.error('some unexpected error occurred')).finally(()=>setLoading(false))
    };

    return (
        <>
            <div className="flex justify-center">
                <form className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl text-center font-semibold mb-6">User Login</h2>
                    <div className="mb-4">
                        <label htmlFor="username" className="block font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="username"
                            className="w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-4 hover:bg-blue-600 transition-colors duration-300"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ?'Please Wait...' : 'Log In'}
                    </button>
                    <p className='text-[14px] mt-3 ms-2' onClick={()=>Navigate('/register')}>Not registered yet? <a className='text-blue-900 font-semibold'>Sign Up</a></p>
                </form>
            </div>
        </>
    );
};

export default SignInForm;
