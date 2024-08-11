// Component for displaying the list of jobs
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs');
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error.response.data.error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl mb-4">Job Listings</h2>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job._id} className="p-4 bg-white rounded shadow">
            <h3 className="text-xl">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p>{job.description}</p>
            <p className="text-gray-500">Location: {job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;

