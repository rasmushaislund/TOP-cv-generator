import '../styles/AddSubSection.css';

export default function AddSubSection({ add }) {
  return (
    <div className="add-sub-section">
      <button
        className="btn add-btn"
        type="button"
        onClick={add}
        disabled={false}
      >
        <img className="add-icon" src="/img/plus-circle.svg" alt="add icon" />
      </button>
    </div>
  );
}
