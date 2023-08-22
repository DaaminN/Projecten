import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MusicPlayer.css'; // Import the CSS file for styling

// Define the MusicPlayer component
const MusicPlayer = ({
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  showMiniPlayer
}) => {
  // Create a reference for the audio element
  const audioRef = useRef(null);

  // State to manage the visibility of the mini player
  const [isMiniPlayerVisible, setIsMiniPlayerVisible] = useState(false);

  // Get the current route location using the useLocation hook
  const location = useLocation();

  // Effect to update mini player visibility based on the showMiniPlayer prop
  useEffect(() => {
    setIsMiniPlayerVisible(showMiniPlayer);
  }, [showMiniPlayer]);

  // Effect to update audio playback based on currentSong and isPlaying
  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.url;
      if (isPlaying) audioRef.current.play();
    }
  }, [currentSong, isPlaying]);

  // Function to handle clicks on a song item
  const handleSongClick = (song) => {
    if (currentSong && currentSong.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  // Function to stop the current song and reset the player
  const handleStop = () => {
    if (currentSong) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentSong(null); // Reset the current song
    }
  };

  // JSX to render the MusicPlayer component
  return (
    <div className={`music-player-container ${isMiniPlayerVisible ? 'with-miniplayer' : ''}`}>
      <audio ref={audioRef} />

      {location.pathname === '/' && (
        <div>
          <h2>Music Player</h2>

          <div className="song-list-container">
            {songs.map((song) => (
              <div
                key={song.id}
                onClick={() => handleSongClick(song)}
                className={`song-item ${currentSong && currentSong.id === song.id ? 'active' : ''}`}
              >
                <img src={song.image_url} alt={song.title} className="song-image" />
                <div className="song-details">
                  <h3 className="song-title">{song.title}</h3>
                  <p className="song-artist">{song.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="controls-container">
        <button onClick={handleStop} className="stop-button">
          Stop
        </button>
        {isPlaying ? (
          <button onClick={() => handleSongClick(currentSong)} className="pause-button">
            Pause
          </button>
        ) : (
          <button onClick={() => handleSongClick(currentSong)} className="play-button">
            Play
          </button>
        )}
        {location.pathname !== '/' && (
          <Link to="/" className="albums-link">
            Go to Home
          </Link>
        )}
      </div>

      {isMiniPlayerVisible && currentSong && (
        <div className="mini-player">
          <img src={currentSong.image_url} alt={currentSong.title} className="mini-player-thumbnail" />
          <div className="mini-player-details">
            <h3 className="mini-player-title">{currentSong.title}</h3>
            <p className="mini-player-artist">{currentSong.artist}</p>
          </div>
          <div className="mini-player-controls">
            {isPlaying ? (
              <button onClick={() => handleSongClick(currentSong)} className="mini-player-play-pause">
                Pause
              </button>
            ) : (
              <button onClick={() => handleSongClick(currentSong)} className="mini-player-play-pause">
                Play
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Export the MusicPlayer component as the default export
export default MusicPlayer;

