import { Link } from "react-router-dom";
import { Job } from "../types/job.interface";

export const Results = ({ jobs }: { jobs: Job[] }) => {
  return (
    <div className="container mx-auto py-10">
      <Link to="/" className="text-white text-2xl font-bold">
        <h1 className="text-2xl font-bold text-black">{`{ kod, ilan } `}</h1>
      </Link>
      <h1 className="text-3xl font-bold mb-6">Arama Sonuçları</h1>
      {jobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-gray-100 shadow-md rounded-md p-4 hover:bg-gray-200"
            >
              {job.logoUrl ? (
                <div className="flex justify-center mb-4">
                  <img
                    src={job.logoUrl}
                    alt={`${job.firmaAdi} logosu`}
                    className="h-16 w-16 object-contain rounded-md"
                  />
                </div>
              ) : (
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 bg-gray-200 flex items-center justify-center rounded-md">
                    <span className="text-gray-500 text-sm">Logo Yok</span>
                  </div>
                </div>
              )}
              <h3 className="text-lg font-bold">{job.pozisyon}</h3>
              <p className="text-sm text-gray-600">
                {job.firmaAdi || "Firma bilgisi yok"} • {job.lokasyon}
              </p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                {job.ilanTipi}
              </span>
              <p className="text-sm mt-4">
                {job.ilanAciklamasi.substring(0, 100)}...
              </p>
              <Link
                to={`/job/${job._id}`}
                className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-md mt-4"
              >
                İlana Git
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Arama sonuçları bulunamadı.</p>
      )}
    </div>
  );
};
