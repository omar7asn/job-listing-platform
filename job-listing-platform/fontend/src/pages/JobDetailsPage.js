// Component for displaying detailed job information
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`/api/jobs/${id}`);
        setJob(response.data.job);
      } catch (error) {
        console.error('Error fetching job:', error.response.data.error);
      }
    };
    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-8 rounded shadow">
      <h2 className="text-2xl mb-2">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p>{job.description}</p>
      <p className="text-gray-500">Location: {job.location}</p>
    </div>
  );
}

export default JobDetailsPage;
