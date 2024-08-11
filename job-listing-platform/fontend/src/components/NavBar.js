// Component for the navigation bar
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function NavBar() {
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    setAuth(null);
    alert('Logged out');
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Job Listing Platform</h1>
        <div>
          {auth ? (
            <button onClick={handleLogout} className="text-white">
              Logout
            </button>
          ) : (
            <span className="text-white">Welcome!</span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
