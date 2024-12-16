import React, { useState } from 'react';
import Button from '../components/Button';

const SignUp = () =>{
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [birthDate,setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSignup = (e)=>{
        e.preventDefault();

        console.log("Signed In......");
    }


    return(
        <div>
            <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSignup}>

                    {/* First Name Input */}
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name
                        </label>
                        <input 
                            type="text" 
                            name="First Name" 
                            id="firstName"
                            value = {firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter First Name'
                            required 
                        />
                    </div>


                    {/* Last Name Input */}
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input 
                            type="text" 
                            name="Last Name" 
                            id="lastName"
                            value = {lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter Last Name'
                            required 
                        />
                    </div>


                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                        />
                    </div>

                    {/* Password input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                        Password
                        </label>
                        <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                        />
                    </div>

                    {/* Birth Date Input */}
                    <div className="mb-4">
                        <label htmlFor="birthDate" className="block text-sm font-semibold text-gray-700 mb-2">
                        Date Of Birth
                        </label>
                        <input
                        type="date"
                        id="birthDate"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        />
                    </div>

                    <div className="flex space-x-3 justify-center">
                        {/* SignUp Button */}
                        <Button text="Sign Up" color="bg-blue-500"/>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}


export default SignUp;