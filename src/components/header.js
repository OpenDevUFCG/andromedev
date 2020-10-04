import { Link } from "gatsby";
import React from "react";

function Header() {

  return (
    <header
      className={`flex justify-center inset-x-0 top-0 py-4 z-30 bg-dark-gray text-white`}
    >
      <nav className="uppercase flex justify-around space-x-16">
        <Link to="/" className="hover:text-orange">
          INÍCIO
        </Link>
        <Link to="/sobre" className="hover:text-orange">
          SOBRE
        </Link>
        <Link to="/guia" className="hover:text-orange">
          GUIA DE BORDO
        </Link>
      </nav>
    </header>
  );
}

export default Header;
