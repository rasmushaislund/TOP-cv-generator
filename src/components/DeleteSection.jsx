import '../styles/DeleteSection.css';

export default function DeleteSection({ handleClick }) {
  return (
    <div className="btn delete-btn">
      <button className="delete-section" onClick={handleClick} type="button">
        <img
          src="/img/delete.svg"
          alt="delete"
          className="btn-icon delete-icon"
        />
      </button>
    </div>
  );
}
