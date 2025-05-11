import { useState, useEffect } from 'react';
import SongForm from './SongForm';
import SearchBar from './SearchBar';
import SongList from './SongList';
import Modal from './Modal'



const Form = () => {
  const [songs, setSongs] = useState(() => {
    const stored = localStorage.getItem('songs');
    return stored ? JSON.parse(stored) : [];
  });

  const [viewCounts, setViewCounts] = useState(() => {
    const storedCounts = localStorage.getItem('viewCounts');
    return storedCounts ? JSON.parse(storedCounts) : {};
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(false);


  useEffect(() => {
    localStorage.setItem('songs', JSON.stringify(songs));
  }, [songs]);

  useEffect(() => {
    localStorage.setItem('viewCounts', JSON.stringify(viewCounts));
  }, [viewCounts]);

  const addSong = (songName, songUrl, videoId) => {
    const newSong = {
      id: songs.length + 1,
      name: songName,
      url: songUrl,
      videoId,
    };

    

    setSongs([...songs, newSong]);
  };

  const handleOpenModal = (videoId) => {
    setViewCounts((prev) => ({
      ...prev,
      [videoId]: (prev[videoId] || 0) + 1,
    }));

    setSelectedVideoId(videoId);
    setModalOpen(true);
  };


  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SongForm addSong={addSong} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SongList
        songs={filteredSongs}
        viewCounts={viewCounts}
        handleOpenModal={handleOpenModal}
        sortAsc={sortAsc}
        setSortAsc={setSortAsc}
      />
      <Modal enabled={modalOpen} onClose={() => setModalOpen(false)} videoId={selectedVideoId} />
    </div>
  );
};

export default Form;
