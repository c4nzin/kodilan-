import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function JobDetails({ jobs }: { jobs: any[] }) {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const existingJob = jobs.find((job) => job._id === id);
    if (existingJob) {
      setJob(existingJob);
    } else {
      const fetchJob = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/ilan/${id}`
          );
          setJob(response.data.data);
        } catch (error: any) {
          if (error.response && error.response.status === 404) {
            setError("İlan bulunamadı.");
          } else {
            console.error("Error fetching job details:", error);
            setError("Bir hata oluştu. Lütfen tekrar deneyin.");
          }
        }
      };
      fetchJob();
    }
  }, [id, jobs]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">{error}</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">{`{ kod, ilan }`}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-4">{job.pozisyon}</h2>
          <p className="text-sm text-gray-600">
            {job.firmaAdi || "Firma bilgisi yok"} • {job.lokasyon}
          </p>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
            {job.ilanTipi}
          </span>
          <div className="mt-4">
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: job.ilanAciklamasi }}
            ></div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4">
          {job.logoUrl && (
            <div className="flex justify-center mb-4">
              <img
                src={job.logoUrl}
                alt={`${job.firmaAdi} logosu`}
                className="h-32 w-32 object-contain rounded-md "
              />
            </div>
          )}
          <h3 className="text-xl font-bold mb-4">İlan Özeti</h3>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Pozisyon:</strong> {job.pozisyon}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Firma:</strong> {job.firmaAdi || "Firma bilgisi yok"}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Lokasyon:</strong> {job.lokasyon}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>İlan Tipi:</strong> {job.ilanTipi}
          </p>
          {job.website && (
            <p className="text-sm text-gray-600 mb-2">
              <strong>Web Sitesi:</strong>{" "}
              <a
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {job.website}
              </a>
            </p>
          )}

          <div className="mt-6">
            <a
              href={`mailto:${job.email}?subject=${encodeURIComponent(
                `Başvuru: ${job.pozisyon}`
              )}&body=${encodeURIComponent(
                `Merhaba,\n\n${job.pozisyon} pozisyonu için başvurmak istiyorum.\n\nTeşekkürler.`
              )}`}
              className="block bg-green-500 text-white text-center py-2 px-4 rounded-md hover:bg-green-600"
            >
              Mail İle Başvur
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
