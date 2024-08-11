// Job posting and retrieval logic
const Job = require('../models/Job');

// Create a new job
exports.createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, postedBy: req.user.userId });
    await job.save();
    res.status(201).json({ job });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json({ jobs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job.postedBy.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    await job.remove();
    res.json({ message: 'Job deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
