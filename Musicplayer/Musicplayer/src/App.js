import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MusicPlayer from './components/MusicPlayer';
import Albums from './components/Albums';
import Playlists from './components/Playlists';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [songs, setSongs] = useState([
    // Your song data here
    // ...
    {
      id: 1,
      title: 'The Real Slim Shady',
      artist: 'Eminem',
      url: 'music/song1.mp3',
      image_url: 'thumbnail/img1.jpeg'
    }, {
      id: 2,
      title: 'Enemy',
      artist: 'Imagine Dragons, JID, Arcane, League of Legends',
      url: 'music/song2.mp3',
      image_url: 'thumbnail/img2.jpg'
    },
    {
      id: 3,
      title: 'Dont Stop Me Now',
      artist: 'Queen',
      url: 'music/song3.mp3',
      image_url: 'thumbnail/img3.jpeg'
    },
    {
      id: 4,
      title: 'The Next Episode',
      artist: 'Dr. Dre, Snoop Dogg',
      url: 'music/song4.mp3',
      image_url: 'thumbnail/img4.jpeg'
    },
    {
      id: 5,
      title: 'Dear God',
      artist: 'Confetti',
      url: 'music/song5.mp3',
      image_url: 'thumbnail/img5.jpeg'
    },
    {
      id: 6,
      title: 'Grenade',
      artist: 'Bruno Mars',
      url: 'music/song6.mp3',
      image_url: 'thumbnail/img6.jpeg'
    },
    {
      id: 7,
      title: 'My Ordinary Life',
      artist: 'The Living Thombstone',
      url: 'music/song7.mp3',
      image_url: 'thumbnail/img7.jpeg'
    },
    // More songs down here


  ]);

  // State to manage the current playing song
  const [currentSong, setCurrentSong] = useState(null);

  // State to track whether a song is currently playing
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Router>
      <div className="spotify-container">
        <nav className="navbar">
          <h2 className="logo">Spotify</h2>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/playlists">Playlists</Link>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <MusicPlayer
                  songs={songs}
                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  showMiniPlayer={false} // Hide miniplayer on the Home page
                />
              }
            />
            <Route
              path="/albums"
              element={
                <React.Fragment>
                  <MusicPlayer
                    songs={songs}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    showMiniPlayer={true} // Show miniplayer on the Albums page
                  />
                  <Albums />
                </React.Fragment>
              }
            />
            <Route
              path="/playlists"
              element={
                <React.Fragment>
                  <MusicPlayer
                    songs={songs}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    showMiniPlayer={true} // Show miniplayer on the Playlists page
                  />
                  <Playlists />
                </React.Fragment>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
