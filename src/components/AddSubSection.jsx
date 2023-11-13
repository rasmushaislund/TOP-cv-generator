import '../styles/AddSubSection.css';

export default function AddSubSection() {
  return (
    <div className="add-sub-section">
      <button className="btn add-btn" type="button" disabled={false}>
        <img className="add-icon" src="/img/plus-circle.svg" alt="add icon" />
      </button>
    </div>
  );
}
