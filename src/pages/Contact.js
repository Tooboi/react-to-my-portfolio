import React, { useState } from 'react';
import background from '../images/JPjumble2k3.webp';

import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    if (!userName) {
      setErrorMessage('Please include your name');
      return;
    }
    if (!message) {
      setErrorMessage(`Please include a message`);
      return;
    }
    if (message && userName && email) {
      setErrorMessage(`Message Sent :)`);
      setUserName('');
      setMessage('');
      setEmail('');
      return;
    }
  };

  return (
    <div className="contactPage pt-5 container flex-column align-items-center" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="m-5 inline-flex justify-content-center glass-2 px-3 select-none">Contact Me</h1>
      <div className="glass-2 p-4 row inline-flex justify-content-center">
        <div class="p-2 mx-2 container align-items-center flex-column">
          <form className="row flex-column">
            <div className="row flex-column py-2">
              <label for="name" className="mb-0">
                Name
              </label>
              <input type="text" value={userName} onChange={handleInputChange} name="userName" placeholder="Elfo"></input>
            </div>
            <div className="row flex-column py-2">
              <label for="email" className="mb-0">
                Email
              </label>
              <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="imElfo@troll.com"></input>
            </div>
            <div className="row flex-column py-2 m-auto">
              <label for="message" className="mb-0">
                Message
              </label>
              <textarea type="textarea" name="message" value={message} onChange={handleInputChange}></textarea>
            </div>
            <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">
              Send
            </button>
          </form>
          {errorMessage && (
              <p className="error-text mt-2 mb-0">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
