import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        <Link to="about">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
