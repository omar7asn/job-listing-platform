// Component for displaying user profiles
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function ProfilePage() {
  const { auth } = useContext(AuthContext);

  if (!auth) return <div>Please login to view your profile.</div>;

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow">
      <h2 className="text-2xl mb-4">Profile</h2>
      <p>Email: {auth.email}</p>
      <p>Role: {auth.role}</p>
    </div>
  );
}

export default ProfilePage;
