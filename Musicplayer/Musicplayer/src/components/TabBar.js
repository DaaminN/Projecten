import React from 'react';
import { Link } from 'react-router-dom';

const TabBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Music Player</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
        <li>
          <Link to="/playlist">Playlist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TabBar;