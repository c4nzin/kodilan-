import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { JobCard } from "../components/JobCard";
import { Job } from "../types/job.interface";

export const Home = ({ setJobs }: { setJobs: (jobs: Job[]) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [lokasyon, setLokasyon] = useState("");
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const navigate = useNavigate();

  const fetchJobs = async (query?: string) => {
    const queryParams = new URLSearchParams();
    if (searchTerm) queryParams.append("pozisyon", searchTerm);
    if (lokasyon) queryParams.append("lokasyon", lokasyon);

    const finalQuery = query || queryParams.toString();

    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/ilan/ara?${finalQuery}`
    );

    setJobs(response.data.data.items || []);
    console.log(query);
    navigate(`/results?${query || queryParams.toString()}`);
  };

  const fetchAllJobs = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/ilan/listele`
    );
    setAllJobs(response.data.data.items || []);
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onAddJob={() => navigate("/create-job")} />
      <section className="relative bg-[url('/src/assets/img/search-job.bg.jpg')] bg-cover bg-center text-white py-10 shadow-md bg-cover bg-center h-60 filter backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">İlan Ara</h2>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            lokasyon={lokasyon}
            setLokasyon={setLokasyon}
            onSearch={fetchJobs}
            fetchJobs={fetchJobs}
          />
        </div>
      </section>

      <section className="bg-gradient-to-r bg-white py-10 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">En Son Eklenen İlanlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allJobs.length > 0 ? (
              allJobs.map((job) => <JobCard key={job._id} job={job} />)
            ) : (
              <p className="text-gray-600">Henüz ilan bulunamadı.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
