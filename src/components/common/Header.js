import React from 'react';
import { Link, IndexLink } from 'react-router';

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

const NavLink = (props) => {
  return (
    <Link {...props} activeClassName="active"/>
  )
}


export default Header;
