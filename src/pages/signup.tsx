import React, { useState } from 'react';
import './SignUp.css'; // Import your CSS file for styling

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Consumer');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign-up logic here
        console.log({ email, password, role });
    };

    return (
        <div className="signup-container">
            <h1>Welcome to WeBill™</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </label>
                <label>
                    Role
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="Consumer">Consumer</option>
                        <option value="Provider">Provider</option>
                    </select>
                </label>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
