import React, { useState } from "react";
import manzil from "../assets/manzil.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [language, setLanguage] = useState("EN"); // Default language as English (EN)

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header className="sticky flex items-center justify-between mx-4">
      <div className="flex items-center">
        <img src={manzil} alt="Manzil Logo" className="w-50 h-20" />
        
      </div>

      <nav className="flex space-x-6">
        <Link className="text-lg font-medium" href="#">
          Discover
        </Link>
        <Link className="text-lg font-medium" href="#">
          Trips
        </Link>
        <Link className="text-lg font-medium" href="#">
          Review
        </Link>
        <Link className="text-lg font-medium" href="#">
          Forums
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <i className="fas fa-globe text-xl"></i>

        {/* Language Selection Dropdown */}
        <select
          value={language}
          onChange={handleLanguageChange}
          className="text-lg font-medium border border-gray-300 rounded p-2 bg-white"
        >
          <option value="EN">English</option>
          <option value="FR">Français</option>
          <option value="ES">Español</option>
          <option value="DE">Deutsch</option>
          <option value="IT">Italiano</option>
        </select>

        <img
          alt="User profile"
          className="rounded-full w-10 h-10"
          src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-xzJV0A7xWpKSjOG7vdR8foNG.png?st=2024-09-06T09%3A10%3A21Z&se=2024-09-06T11%3A10%3A21Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-05T22%3A05%3A14Z&ske=2024-09-06T22%3A05%3A14Z&sks=b&skv=2024-08-04&sig=lo40O2eA/fASPj2lch3G6pOQfwwwLPWSoRhneUE0e6I%3D"
        />
      </div>
    </header>
  );
};

export default Navbar;
