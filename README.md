# Todo Web App Documentation
# Visit [WebApp](https://ankit2four.github.io/todo/)

## Overview
The Todo Web App is a simple web application that allows users to manage their tasks. Users can add new tasks, mark tasks as complete or incomplete, edit tasks, delete tasks, and perform batch actions on selected tasks. The app also features user authentication, ensuring that each user has access to their own task list.

## Technologies Used
- React: The front-end of the app is built using React, a popular JavaScript library for building user interfaces.
- React Router: React Router is used for handling client-side routing, allowing navigation between different views within the app.
- Local Storage: The app uses the browser's local storage to persist user-specific tasks.

## Components

### Login Component
- The Login component allows users to log in to the app.
- Users can enter their username and password to access their task list.
- If the user is already logged in, they are redirected to the Home component.

### Home Component
- The Home component displays the user's task list.
- Users can add new tasks, mark tasks as complete or incomplete, edit tasks, and delete tasks.
- Batch actions are available to mark selected tasks as complete, incomplete, or delete them.
- Users can also select multiple tasks for batch actions.
- Task data is specific to each user and is stored in local storage.
- The component also provides options for editing tasks on hover and selection.

### About Component
- The About component provides information about the developer and the project.
- It displays the developer's name, Ankit Singh, and the current date.
- This component serves as an example of a simple informational page.

### Profile Component
- The Profile component displays the user's username.
- Users can log out from the app by clicking the "Log Out" button.


## User Authentication
- User authentication is implemented using React context and the UserContext component.
- When a user logs in, their username is stored in the context, allowing other components to access the current user.
- Logging out sets the current user to null, effectively logging the user out.

## Data Persistence
- User-specific task data is stored in local storage.
- Each user's tasks are identified by their username.
- Tasks are loaded from local storage when a user logs in and saved to local storage when tasks are added, edited, or deleted.

## Styling
- The app's styling is defined in the `index.css` file.
- The primary color palette includes black, white, and sky blue.

## Footer
- A footer is included at the bottom of the app to provide additional information or links.
- The footer is styled to always appear at the bottom of the browser window.

## Future Enhancements
- Improve the task editing experience to allow users to freely edit task text.
- Implement user registration to allow new users to create accounts.
- Add additional features such as task due dates and task categories.
- Implement user profiles with more user-specific information.

## Setup to run webapp in development mode
- Setup React.js.
- Open directory in terminal in which you want create project.
- Run command "npm create-react-app todo".
- Run command "npm install react-router-dom" (to install library which is used in webapp).
- Replace file of public & src directory to files of repository's public & src directory.
- Run command "npm start" in terminal.
- It will start running on localhost.

## Conclusion
The Todo Web App is a simple task management application built with React. It provides basic task management features along with user authentication and data persistence. This app can serve as a foundation for building more complex task management applications with additional features and functionality.

Please feel free to reach out if you have any questions or need further assistance with the app!
