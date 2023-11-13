import '../styles/SectionSep.css';

export default function SectionSep({ name, imgPath }) {
  return (
    <div className="separator">
      <p className="profile-heading">{name}</p>
      <img src={imgPath} alt="section icon" className="section-header-icon" />
      <div className="separator-line"></div>
    </div>
  );
}
