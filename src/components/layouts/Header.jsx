// import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="mb-10 flex items-center justify-between">
      <Link to="/">
        <img src="/logo.svg" alt="Netflix" className="h-8" />
      </Link>
    </header>
  );
};
