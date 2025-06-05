import React, { useState } from 'react';
import './index.css';
import AccountSettings from '../AccountSettings/AccountSettings';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  });

  const [accountCreated, setAccountCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add signup logic here
    setAccountCreated(true); // Trigger display of AccountSettings
  };

  return accountCreated ? (
    <AccountSettings />
  ) : (
    <div className="signup-container">
      <h2>Create your <span className="brand">PopX</span> account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Full Name*</label>
        <input
          type="text"
          name="fullName"
          placeholder="Marry Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Phone number*</label>
        <input
          type="tel"
          name="phone"
          placeholder="9876543210"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Email address*</label>
        <input
          type="email"
          name="email"
          placeholder="email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password *</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Company name</label>
        <input
          type="text"
          name="company"
          placeholder="Company Inc."
          value={formData.company}
          onChange={handleChange}
        />

        <label>Are you an Agency?*</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="isAgency"
              value="Yes"
              checked={formData.isAgency === 'Yes'}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="isAgency"
              value="No"
              checked={formData.isAgency === 'No'}
              onChange={handleChange}
              required
            />
            No
          </label>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
