import React, { createContext, useState } from 'react';

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);

  const songs = [
    {
      id: 1,
      title: 'The Real Slim Shady',
      artist: 'Eminem',
      url: 'music/song1.mp3',
      image_url: 'thumbnail/img1.jpeg'
    },
    {
      id: 2,
      title: 'Enemy',
      artist: 'Imagine Dragons, JID, Arcane, League of Legends',
      url: 'music/song2.mp3',
      image_url: 'thumbnail/img2.jpg'
    },
    // ... rest of your songs
  ];

  return (
    <SongContext.Provider value={{ currentSong, setCurrentSong, songs }}>
      {children}
    </SongContext.Provider>
  );
  
};
