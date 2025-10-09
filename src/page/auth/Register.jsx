import React, { useState } from "react";
import { useRegisterMutation } from "../../redux/services/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        cPassword: ""
    });
    const navigator = useNavigate();
    const [register, {isLoading, isError}] = useRegisterMutation()
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    async function handleSubmit(e) {
        e.preventDefault()
        if(formData.password != formData.cPassword){
            alert('Comfirm password is not matched')
            return
        }
        try{
            const response = await register(formData).unwrap()
           if(response){
            localStorage.setItem('accessToken', response.token)
            navigator('/')
           }
           
        }catch(error){
            console.error("Verification failed", error);
        }
     }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-letter-color mb-2">
                    Create Account
                </h2>
                <p className="text-center text-sm text-descipton-color mb-6">
                    Join us and start your journey today.
                </p>

                <form className="space-y-4" autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-letter-color">
                            Name
                        </label>
                        <input
                        onChange={handleChange}
                            type="text"
                            placeholder="Your name"
                            name="name"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-letter-color">
                            Email
                        </label>
                        <input
                        onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-letter-color">
                            Password
                        </label>
                        <input
                        onChange={handleChange}
                            type="password"
                            placeholder="Password"
                            name="password"
                            autoComplete="new-password"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-letter-color">
                            Confirm Password
                        </label>
                        <input
                        onChange={handleChange}
                            type="password"
                            placeholder="Comfirm Password"
                            name="cPassword"
                            autoComplete="new-password"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-2 rounded-xl bg-primary-color text-white font-semibold hover:bg-primary-dark-color transition-colors"
                    >
                        Register
                    </button>

                    <p className="text-sm text-center text-descipton-color mt-4">
                        Already have an account?{" "}
                        <Link to={"/auth/login"}

                            className="text-primary-color font-medium hover:underline"
                        >
                            
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default Register;
