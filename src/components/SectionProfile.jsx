import '../styles/SectionProfile.css';
import SectionSep from './SectionSep';

export default function SectionProfile() {
  return (
    <div className="section section-profile">
      <SectionSep name={'PROFILE'} imgPath={'/img/face-man.svg'} />
      <textarea
        name="profile-text"
        id="profile-text"
        rows="8"
        disabled={false}
        maxLength={250}
      ></textarea>
    </div>
  );
}
