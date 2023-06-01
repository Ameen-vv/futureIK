import axios from 'axios';
import { useState } from 'react';
import { userUrl } from '../../../apiLinks/apiLinks'
import { useNavigate } from 'react-router-dom'

const RegistrationForm = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email,setEmail] = useState('')
    const Navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName.trim() === '') {
            toast.error('enter valid username')
            return;
        }
        if (password.trim() === '' || password.length < 6) {
            toast.error('password should contain 6 characters')
            return;
        }
        if (email.trim() === '') {
            toast.error('enter a valid email')
            return;
        }

        const userData = {
            userName,
            email,
            password
        }
        console.log(userData)
        axios.post(`${userUrl}register`, userData)
            .then((response) => {
                if(response.data.registration){
                    localStorage.setItem('token',response.data.token)
                    Navigate('/home')
                }else{
                    toast.error('user already exists')
                }
            }).catch(() => {
                toast.error('some unexpected error occurred')
            })
    };


    return (
        <>
            <div className="flex justify-center">
                <form className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl text-center font-semibold mb-6">User Registration</h2>
                    <div className="mb-4">
                        <label htmlFor="username" className="block font-medium mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your username"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block font-medium mb-2">E-mail</label>
                        <input
                            type="text"
                            id="email"
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
                    >
                        Register
                    </button>
                    <p className='text-[14px] mt-3 ms-2' onClick={()=>Navigate('/')}>Already a user? <a className='text-blue-900 font-semibold'>Sign In</a></p>
                </form>
            </div>
        </>
    );
};

export default RegistrationForm;
