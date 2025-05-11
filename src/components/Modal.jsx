
import '@justinribeiro/lite-youtube'

const Modal = ({ enabled, onClose, videoId }) => {
  if (!enabled || !videoId) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        className="modal-content"
        style={{
          background: '#fff',
          padding: '1rem',
          borderRadius: '8px',
          position: 'relative',
          maxWidth: '560px',
          width: '90%',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: '#1e1e2f',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          Cerrar
        </button>
        <lite-youtube
          videoid={videoId}
            style={{
              display: 'block',
              width: '100%',
              aspectRatio: '16 / 9',
            }}
        ></lite-youtube>
      </div>
    </div>
  );
};

export default Modal;
