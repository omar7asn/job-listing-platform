// Component for searching jobs
import React, { useState } from 'react';
import axios from 'axios';

function JobSearch({ setJobs }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/jobs?search=${searchTerm}`);
      setJobs(response.data.jobs);
    } catch (error) {
      console.error('Error searching jobs:', error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="max-w-md mx-auto mt-4">
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}

export default JobSearch;
