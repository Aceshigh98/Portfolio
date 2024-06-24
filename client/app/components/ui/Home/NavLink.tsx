import React from 'react';

/**
 * Represents the props for the NavLink component.
 */
interface NavLinkProps {
    page: string;
    name: string;
}

const NavLink: React.FC<NavLinkProps> = ({ page, name }) => {
  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
    }
  };

  return (
    <a
      href={`#${page}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(page);
      }}
      className="nav-link"
    >
      {name}
    </a>
  );
};

export default NavLink;
