import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Job } from "../types/job.interface";

export const JobCard = ({ job }: { job: Job }) => (
  <div
    key={job._id}
    className="bg-white text-black shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
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
        <div className="h-16 w-16 bg-gray-100 flex items-center justify-center rounded-md">
          <span className="text-gray-500 text-sm">Logo Yok</span>
        </div>
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{job.pozisyon}</h3>
    <p className="text-sm text-gray-600 mb-4">
      {job.firmaAdi || "Firma bilgisi yok"} • {job.lokasyon}
    </p>
    <span className="inline-block bg-gradient-to-r from-gray-300 to-purple-400 text-white text-xs px-3 py-1 rounded-full mb-4">
      {job.ilanTipi}
    </span>
    <div className="bg-gray-50 p-4 rounded-md text-gray-700 text-sm leading-relaxed hover:bg-gray-100 transition-colors duration-300">
      {job.ilanAciklamasi.substring(0, 150)}...
    </div>
    <Link
      to={`/job/${job._id}`}
      className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-sm font-medium py-2 px-4 rounded-md mt-4 transition-all duration-300"
    >
      İlana Git
      <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-white" />
    </Link>
  </div>
);
