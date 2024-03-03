import React, { useState } from 'react';

// Defines the Form component. This component will be used in the ContactPage components
function Form() {
  //There are various state variables that are used to store the values of the input fields. If the input field is non-existent or invalid, red text will appear above the submit button. 
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [warningName, setwarningName] = useState('A name is required');
  const [warningEmail, setwarningEmail] = useState('A valid email is required');
  const [warningMessage, setwarningMessage] = useState('A message is required');

  const handleWarningName = (e) => {
    const { value } = e.target;
    console.log(value)
    if (value=="") {
      setwarningName("A name is required")
    } else {
      setwarningName("")
    }
  };
 
  //Determines if email is valid. 
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

  //Determines if there is a message present. 
  const handleWarningMessage = (e) => {
    const { value } = e.target;
    console.log(value)
    if (value=="") {
      setwarningMessage("A message is required")
    } else {
      setwarningMessage("")
    }
  };

//Changes the state of state variables as a user types in the input fields.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Message submitted!`);
  };

  //Returns the form to be used in the ContactPage component.
  return (
    <div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', maxWidth: '500px' }}>
          <label htmlFor="Name">Name:</label>
          <input
            value={Name}
            name="Name"
            onChange={handleInputChange}
            onBlur={handleWarningName}
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
            style={{ width: '100%' }}
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
            style={{ width: '100%', height: '100px' }} 
          />
        </div>
        <h5 style={{ color: 'red' }}>
          {warningName}
        </h5>
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
      <h2>Contact</h2>
      <Form />
    </div>
  );
}