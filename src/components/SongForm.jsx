import { useState } from 'react';
import { isValidYoutubeUrl, extractYoutubeId } from './utils';

const SongForm = ({ addSong }) => {
  const [songName, setSongName] = useState('');
  const [songUrl, setSongUrl] = useState('');

  const handleSubmit = () => {
    if (songName.trim() === '' || songUrl.trim() === '') {
      return alert('Ambos campos son obligatorios');
    }
    if (!isValidYoutubeUrl(songUrl)) {
      return alert('URL no válida de YouTube');
    }

    const videoId = extractYoutubeId(songUrl);
    if (!videoId) return alert('No se pudo extraer el ID del video');

    addSong(songName, songUrl, videoId);
    setSongName('');
    setSongUrl('');
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={songName}
        autoComplete="off"
        onChange={(e) => setSongName(e.target.value)}
        placeholder="Nombre de la canción"
        className="input"
      />
      <input
        type="text"
        value={songUrl}
        onChange={(e) => setSongUrl(e.target.value)}
        placeholder="URL de YouTube"
        className="input"
      />
      <button onClick={handleSubmit} className="button">
        Agregar
      </button>

      <style jsx>{`
        .form-container {
          background-color: #1e1e2f;
          border: 1px solid #4b5563;
          border-radius: 12px;
          padding: 24px;
          max-width: 400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .input {
          padding: 10px 14px;
          border-radius: 8px;
          border: none;
          font-size: 14px;
          outline: none;
          color: #111;
        }

        .input::placeholder {
          color: #666;
        }

        .button {
          background-color: transparent;
          border: 1px solid white;
          color: white;
          padding: 10px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .button:hover {
          background-color: white;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default SongForm;
