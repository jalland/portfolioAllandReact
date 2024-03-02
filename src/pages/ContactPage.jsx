import React, { useState } from 'react';

function Form() {
  // Here we set two state variables for Name and email using `useState`
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [warningEmail, setwarningEmail] = useState('A valid email is required');
  const [warningMessage, setwarningMessage] = useState('A message is required');


 
  const handleWarningEmail = (e) => {
    const { value } = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);
    if (isValidEmail) {
      setwarningEmail("")
    } else {
      setwarningEmail("Not a valid email address")
    }
  };

  const handleWarningMessage = (e) => {
    const { value } = e.target;
    console.log(value)
    if (value=="") {
      setwarningMessage("A message is required")
    } else {
      setwarningMessage("")
    }
  };

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
  
    // Update the state based on the input field name
    if (name === 'Name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Message submitted!`);
  };

  return (
    <div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', maxWidth: '500px' }}>
          <label htmlFor="Name">Name:</label>
          <input
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            id="Name"
            placeholder="Enter your name"
            style={{ width: '100%' }} // Adjusted width
          />
        </div>
        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', maxWidth: '500px' }}>
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleWarningEmail}
            type="text"
            id="email"
            placeholder="Enter your email"
            style={{ width: '100%' }} // Adjusted width
          />
        </div>
        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', maxWidth: '500px' }}>
          <label htmlFor="message">Message:</label>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleWarningMessage}
            type="text"
            id="message"
            placeholder="Enter your message"
            style={{ width: '100%', height: '100px' }} // Adjusted width
          />
        </div>
        <h5 style={{ color: 'red' }}>
          {warningEmail}
        </h5>
        <h5 style={{ color: 'red' }}>
          {warningMessage}
        </h5>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

// Define the ContactPage component
export default function ContactPage() {
  return (
    <div className="container pt-4">
      <h2>Contact Me</h2>
      <Form /> {/* Render the Form component */}
    </div>
  );
}