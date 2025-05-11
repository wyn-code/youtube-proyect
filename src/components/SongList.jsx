const SongList = ({ songs, viewCounts, handleOpenModal, sortAsc, setSortAsc }) => {
  return (
    <div className="global-songs">
      <div className="box-songs">
        <h2>Canciones</h2>
        <button
          className="btn-order"
          onClick={() => setSortAsc(!sortAsc)}
        >
          <img
            src="/public/icons/up-arrow-solid-24.png"
            alt="orden"
            style={{
              transform: sortAsc ? 'none' : 'rotate(180deg)',
            }}
          />
        </button>
      </div>

      <div className="songs-music">
        <ul>
          {songs
            .sort((a, b) => {
              const viewsA = viewCounts[a.videoId] || 0;
              const viewsB = viewCounts[b.videoId] || 0;
              return sortAsc ? viewsA - viewsB : viewsB - viewsA;
            })
            .map((song, index) => (
              <li key={song.id} className="text-song">
                <div className="song-info">
                  <span className="index">{index + 1}.</span>
                  <div className="details">
                    <p className="song-name">{song.name}</p>
                    <p className="singer">Singer's</p>
                  </div>
                </div>
                <div className="actions">
                  <button className="view-btn" onClick={() => handleOpenModal(song.videoId)}>
                    Ver
                  </button>
                  <span className="views">{viewCounts[song.videoId] || 0} vistas</span>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <style jsx>{`
        .global-songs {
          border-radius: 16px;
          padding: 30px;
          color: #f3f4f6;
          border: 1px solid #4b5563;
          background-color: #1e1e2f;
          margin: 30px
        }

        .box-songs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .btn-order {
          background: #374151;
          border: none;
          border-radius: 50%;
          width: 42px;
          height: 42px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-order:hover {
          background-color: #60a5fa;
          transform: scale(1.1);
        }

        .btn-order img {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .songs-music ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .text-song {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #374151;
        }

        .song-info {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .index {
          font-size: 14px;
          color: #9ca3af;
        }

        .details {
          display: flex;
          flex-direction: column;
        }

        .song-name {
          font-size: 16px;
          font-weight: 600;
          color: #e5e7eb;
        }

        .singer {
          font-size: 12px;
          color: #9ca3af;
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .view-btn {
          padding: 6px 16px;
          border-radius: 8px;
          border: 2px solid #60a5fa;
          background-color: transparent;
          color: #60a5fa;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-btn:hover {
          background-color: #60a5fa;
          color: #1f2937;
          transform: scale(1.05);
          box-shadow: 0 0 10px #60a5fa80;
        }

        .views {
          font-size: 14px;
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
};

export default SongList;
