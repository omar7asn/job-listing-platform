// Component for the home page of the app
import React, { useState } from 'react';
import JobList from '../components/JobList';
import JobSearch from '../components/JobSearch';

function HomePage() {
  const [jobs, setJobs] = useState([]);

  return (
    <div>
      <JobSearch setJobs={setJobs} />
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
