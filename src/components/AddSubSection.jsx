import '../styles/AddSubSection.css';

export default function AddSubSection({ handleClick }) {
  return (
    <div className="add-sub-section">
      <button
        className="btn add-btn"
        type="button"
        onClick={handleClick}
        disabled={false}
      >
        <img className="add-icon" src="/img/plus-circle.svg" alt="add icon" />
      </button>
    </div>
  );
}
