import React from 'react';
import { useUser } from './UserContext';

function Profile() {
  const { currentUser, setCurrentUser } = useUser();

  const handleLogout = () => {
    // Clear the currentUser in the context to log out the user
    setCurrentUser(null);
  };



  return (
    <div className="profile">
      {currentUser ? (
        <div>
          <h1>Welcome, {currentUser.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
      
        </div>
      ) : (
        <h1>You are logged out, Go to homepage to login again, Thank you.</h1>

      )}
    </div>
  );
}

export default Profile;
