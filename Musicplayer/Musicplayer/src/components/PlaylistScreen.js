import React from 'react';

const PlaylistScreen = ({ songs, setCurrentSong }) => {
  const handleSongSelect = (song) => {
    setCurrentSong(song);
  };

  return (
    <div>
      <h2>Playlist Screen</h2>
      {songs.map((song) => (
        <div key={song.id}>
          <p>{song.title}</p>
          <button onClick={() => handleSongSelect(song)}>Play</button>
        </div>
      ))}
    </div>
  );
};

export default PlaylistScreen;
