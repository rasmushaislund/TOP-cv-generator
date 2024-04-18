import '../styles/AddSubSection.css';

export default function AddSubSection({ add, hide }) {
  return (
    <div className={`add-sub-section${hide ? ' hide' : ''}`}>
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
