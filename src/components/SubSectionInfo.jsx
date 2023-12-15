import '../styles/SubSectionInfo.css';
import { useState } from 'react';

export default function SubSectionInfo({ what, where }) {
  const [title, setTitle] = useState('');
  const [institution, setInstitution] = useState('');
  const [start, setStart] = useState('');
  const [end, endState] = useState('');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="sub-section-info">
      <input type="text" onChange={handleInputChange} placeholder={what} />
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
