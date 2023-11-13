import '../styles/SubSectionInfo.css';

export default function SubSectionInfo({ what, where }) {
  return (
    <div className="sub-section-info">
      <input type="text" placeholder={what} />
      <input type="text" placeholder={where} />
      <div className="from-and-to">
        <input
          type="text"
          name="date-from"
          id="date-from"
          placeholder="mm.yyyy"
          required
        />
        <p>-</p>
        <input
          type="text"
          name="date-to"
          id="date-to"
          placeholder="mm.yyyy"
          required
        />
      </div>
    </div>
  );
}
