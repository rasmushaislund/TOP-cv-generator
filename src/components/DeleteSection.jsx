import '../styles/DeleteSection.css';

export default function DeleteSection({ deleteSub }) {
  return (
    <div className="btn delete-btn">
      <button className="delete-section" onClick={deleteSub} type="button">
        <img
          src="/img/delete.svg"
          alt="delete"
          className="btn-icon delete-icon"
        />
      </button>
    </div>
  );
}
