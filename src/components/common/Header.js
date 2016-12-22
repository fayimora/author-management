import React, {PropTypes} from 'react';
import { IndexLink } from 'react-router';
import NavLink from './NavLink';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <NavLink to="courses">Courses</NavLink>
      {" | "}
      <NavLink to="about">About</NavLink>
      {loading && <LoadingDots />}
    </nav>
  );
};

Header.proptypes = {
  loading: PropTypes.bool.isRequired
}

export default Header;
