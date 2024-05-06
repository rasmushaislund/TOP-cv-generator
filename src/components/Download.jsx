import '../styles/Download.css';

export function Download({ getPDF }) {
  return (
    <>
      <button className="btn download-btn" onClick={getPDF}>
        <img
          className="btn-icon"
          src="../img/tray-arrow-down.svg"
          alt="download"
        />
        Download
      </button>
    </>
  );
}
