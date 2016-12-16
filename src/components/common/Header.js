import React from 'react';
import { IndexLink } from 'react-router';
import NavLink from './NavLink';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <NavLink to="courses">Courses</NavLink>
      {" | "}
      <NavLink to="about">About</NavLink>
    </nav>
  );
};

export default Header;
