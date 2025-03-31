import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Job } from "./types/job.interface";
import { Home } from "./components/Home";
import { JobDetails } from "./pages/job-details.page";
import CreateJob from "./pages/create-job.page";
import { Results } from "./components/Results";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setJobs={setJobs} />} />
        <Route path="/results" element={<Results jobs={jobs} />} />
        <Route path="/job/:id" element={<JobDetails jobs={jobs} />} />
        <Route path="/create-job" element={<CreateJob />} />
      </Routes>
    </Router>
  );
}

export default App;
