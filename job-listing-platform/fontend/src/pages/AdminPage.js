// Component for admin page
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPage() {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/admin/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error.response.data.error);
      }
    };

    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/admin/jobs');
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error.response.data.error);
      }
    };

    fetchUsers();
    fetchJobs();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white p-8 rounded shadow">
      <h2 className="text-2xl mb-4">Admin Dashboard</h2>
      
      <div className="mb-6">
        <h3 className="text-xl mb-2">Users</h3>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user._id} className="p-4 bg-gray-100 rounded shadow">
              <p className="font-semibold">Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl mb-2">Jobs</h3>
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job._id} className="p-4 bg-gray-100 rounded shadow">
              <p className="font-semibold">Title: {job.title}</p>
              <p>Company: {job.company}</p>
              <p>Description: {job.description}</p>
              <p>Location: {job.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPage;
