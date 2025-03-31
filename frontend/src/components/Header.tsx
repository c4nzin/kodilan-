import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { JSX } from "react";

export const Header = ({ onAddJob }: { onAddJob: () => void }): JSX.Element => (
  <header className="bg-gray-800 text-black py-4 shadow-md bg-white ">
    <div className="container mx-auto flex justify-between items-center px-4">
      <Link to="/" className="text-white text-2xl font-bold ">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-600 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          {` { kod, ilan }`}
        </h1>
      </Link>
      <div>
        <Button
          variant="default"
          className="relative bg-black text-white border-white border-1 border-solid rounded w-52 h-12 hover:bg-gradient-to-l hover:from-gray-900 hover:via-gray-800 hover:to-black transition-all duration-[2000ms] before:absolute before:inset-[-4px] before:rounded before:bg-gradient-to-r before:from-white before:to-purple-500 before:z-[-1] before:content-['']"
          onClick={onAddJob}
        >
          <FontAwesomeIcon icon={faPlus} className="text-white mr-5" />
          <h1 className="bg-gradient-to-r from-gray-700 via-gray-300 to-white bg-clip-text text-transparent">
            Ücretsiz İlan Ekle
          </h1>
        </Button>
      </div>
    </div>
  </header>
);
