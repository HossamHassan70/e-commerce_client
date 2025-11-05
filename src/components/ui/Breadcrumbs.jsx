// src/components/ui/Breadcrumbs.jsx
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav className="text-sm text-white">
      <ol className="list-none pb-3 flex flex-wrap space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.path ? (
              <Link to={item.path} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
