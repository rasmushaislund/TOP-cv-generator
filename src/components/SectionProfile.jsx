import '../styles/SectionProfile.css';
import SectionSep from './SectionSep';
import SaveEdit from './SaveEdit';
import { useState } from 'react';

export default function SectionProfile() {
  const [bool, setBool] = useState(true);

  const handleToggle = () => {
    if (!bool) {
      setBool(true);
    } else {
      setBool(false);
    }
  };

  return (
    <div className="section section-profile">
      <SaveEdit toggle={handleToggle} />
      <SectionSep name={'PROFILE'} imgPath={'/img/face-man.svg'} />
      <textarea
        name="profile-text"
        id="profile-text"
        rows="8"
        disabled={bool}
        maxLength={250}
      ></textarea>
    </div>
  );
}
