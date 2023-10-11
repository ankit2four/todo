import React from 'react';

function About() {
  const developerName = 'Ankit Singh';
  const currentDate = new Date().toLocaleDateString();
  const version = '1.0';
  const releaseDate = 'October 10, 2023';

  return (
    <div className="about-container">
      <h2>About This App</h2>
      <p>
        Welcome to our web application, a simple and intuitive To-Do List app built with React.js. This application is designed to help you keep track of your tasks and stay organized.
      </p>
      <p>
        <strong>Developer:</strong> {developerName}
      </p>
      <p>
        <strong>Version:</strong> {version}
      </p>
      <p>
        <strong>Release Date:</strong> {releaseDate}
      </p>
      <p>
        <strong>Current Date:</strong> {currentDate}
      </p>
      <p>
        If you have any questions, feedback, or need assistance, please feel free to <a href="mailto:mail2ankit1234@gmail.com">contact us</a>.
      </p>
      <p>
        <em>Thank you for using our application!</em>
      </p>
    </div>
  );
}

export default About;
